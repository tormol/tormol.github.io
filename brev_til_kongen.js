// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3.0

function set_message(text) {
    document.getElementById('message').textContent = text
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function select_random_card(player) {
    // wait a bit
    await sleep(600)

    if (player.number_of_cards == 1) {
        return 0
    }
    let first = player.card(0).name
    let second = player.card(1).name
    if (first == 'K') {
        return 0
    } else if (second == 'K') {
        return 1
    } else if (first == 'Q' && (second == '10' || second == 'J')) {
        return 0
    } else if (second == 'Q' && (first == '10' || first == 'J')) {
        return 1
    } else if ((first == '6' || first == '7') && second == '8') {
        return 0
    } else if (first == '8' && (second == '6' || second == '7')) {
        return 1
    } else if (first == '6' && second == 'J') {
        return 0
    } else if (first == 'J' && second == '6') {
        return 1
    }
    let index = Math.floor(Math.random()*player.number_of_cards)
    return index
}

async function select_random_player(player, players) {
    if (players.every(p => p === player || p.immune)) {
        return player
    }

    // wait a bit
    await sleep(600)

    let index
    do {
        index = Math.floor(Math.random()*players.length)
    } while (players[index].immune || players[index] === player);
    return players[index]
}

async function guess_random_player(player, players) {
    const guess_on = await select_random_player(player, players)
    const card_index = 0 // Math.floor(Math.random()*guess_on.number_of_cards)
    let value
    do {
        value = Math.floor(Math.random()*(13-7))+7
    } while (guess_on == player && value == guess_on.card(card_index).value);
    return [guess_on, CARD_BY_VALUE[value]]
}

function tell_action(message) {
    const node = document.getElementById('buttons');
    if (message) {
        node.textContent = message
    } else {
        node.textContent = ''
    }
}

async function click_card(player) {
    // store the resolve callback outside of the promise callback
    let resolve_selected
    let valid_selected = new Promise(resolve => {
        resolve_selected = resolve
    })

    function card_clicked(event) {
        // find card node (instead of the child node that was clicked on)
        let node = event.target
        while (!node.classList.contains('card')) {
            console.log('clicked node '+node.nodeName+'#'+node.id+'.'+node.className+' is not .card')
            node = node.parentNode
        }

        // find the index of node in its parent
        const index = Array.prototype.indexOf.call(node.parentNode.children, node)

        if (can_play(player, index)) {
            resolve_selected(index)
        }
    }

    // enable selecting
    for (let i=0; i<player.number_of_cards; i++) {
        player.slot(i).node.addEventListener('click', card_clicked)
    }
    player.hand_node.classList.add('pick-one')

    tell_action("Velg et kort å spille.")
    let index = await valid_selected
    tell_action()

    // disable selecting
    player.hand_node.classList.remove('pick-one')
    for (let i=0; i<player.number_of_cards; i++) {
        player.slot(i).node.removeEventListener('click', card_clicked)
    }

    return index
}

async function click_player(player, players) {
    // store the resolve callback outside of the promise callback
    let resolve_player
    let select_player = new Promise(resolve => {
        resolve_player = resolve
    })

    function player_clicked(event) {
        // find card node (instead of the child node that was clicked on)
        let node = event.target
        while (!node.classList.contains('hand')) {
            console.log('clicked node '+node.nodeName+'#'+node.id+'.'+node.className+' is not .hand')
            node = node.parentNode
        }
        for (let p of players) {
            if (p.hand_node === node) {
                resolve_player(p)
                return
            }
        }
        console.error('No player found with hand id '+node.id)
        resolve_player(null)
    }

    // enable selecting
    let all_immune = true
    for (let p of players) {
        if (p != player && !p.immune) {
            p.hand_node.addEventListener('mousedown', player_clicked)
            p.hand_node.classList.add('pick-one')
            all_immune = false
        }
    }

    if (all_immune) {
        return player
    }
    tell_action('Velg en motspillers kort.')
    let selected_player = await select_player
    tell_action()
    // disable selecting
    for (let p of players) {
        p.hand_node.classList.remove('pick-one')
        p.hand_node.removeEventListener('mousedown', player_clicked)
    }
    return selected_player
}

async function click_guess(player, players) {
    // store the resolve callback outside of the promise callback
    let resolve_guess
    let select_guess = new Promise(resolve => {
        resolve_guess = resolve
    })

    // enable selecting
    let all_immune = true
    for (let p of players) {
        if (p != player && !p.immune) {
            p.slot().make_guessable(guess=>resolve_guess([p, guess]))
            all_immune = false
        }
    }
    if (all_immune) {
        player.slot().make_guessable(guess=>resolve_guess([player, guess]))
    }

    tell_action("Gjett et tall på en motspillers kort.")
    let guess = await select_guess
    tell_action()

    // disable selecting
    for (let p of players) {
        p.slot().render_default()
    }
    return guess
}

async function deal_cards(players, deck, removed_card, parent) {
    deck.set_cards(shuffled_deck())
    console.log('cards in deck before dealing: ' + deck.number_of_cards)

    // give cards
    for (const player of players) {
        await animate_move(deck, player.add_card(), parent, 0.7)
    }

    // remove one card when less than four players
    if (players.length < 4) {
        await animate_move(deck, removed_card, parent, 0.5)
    }

    console.log('cards in deck after dealing: ' + deck.number_of_cards)
}

function can_play(player, index) {
    if (player.card(index).name == 'J' || player.card(index).name == '10') {
        for (let other_index=0; other_index<player.number_of_cards; other_index++) {
            if (other_index != index && player.card(other_index).name == 'Q') {
                player.render_feedback('Du må spille damen')
                return false
            }
        }
    } else if (player.card(index).name == 'K') {
        player.render_feedback('Du taper hvis du spiller kongen!')
        return false
    }
    player.render_feedback('')
    return true
}

async function take_effect(card, played_by, players, deck, played_cards, parent_node) {
    const SHOW_RESULT_DURATION = 750
    if (card.name == 'J') {
        const swap_with = await played_by.select_player(played_by, players)
        if (swap_with == played_by) {
            await played_by.slot(0).spin(1)
        } else {
            // swap simultaneously
            const swapped = Promise.all([
                animate_move(played_by.slot(0), swap_with.add_card(), parent_node, 1.2),
                animate_move(swap_with.slot(0), played_by.add_card(), parent_node, 1.2)
            ])
            // remove empty slots early so that it doesn't look like there'll be two cards
            played_by.remove_card(0)
            swap_with.remove_card(0)
            await swapped
        }
    } else if (card.name == '10') {
        const to_draw = await played_by.select_player(played_by, players)
        await animate_move(to_draw.slot(0), played_cards, parent_node, 0.6)
        to_draw.remove_card(0)
        if (played_cards.card.name == 'K' || deck.number_of_cards == 0) {
            return to_draw
        }
        await animate_move(deck, to_draw.add_card(), parent_node, 0.6)
    } else if (card.name == '9') {
        played_by.make_immune()
        await sleep(SHOW_RESULT_DURATION/2)
    } else if (card.name == '8') {
        const duel_with = await played_by.select_player(played_by, players)
        if (duel_with === played_by) {
            await played_by.slot(0).spin(1)
        } else if (played_by.card(0).value > duel_with.card(0).value) {
            return duel_with
        } else if (played_by.card(0).value < duel_with.card(0).value) {
            // show what the other player had
            played_by.view_others_card(duel_with.slot(0))
            await sleep(SHOW_RESULT_DURATION)
            duel_with.slot(0).render_default()

            return played_by
        } else {
            // show that the other player had the same card
            played_by.view_others_card(duel_with.slot(0))
            await sleep(SHOW_RESULT_DURATION*2)
            duel_with.slot(0).render_default()
        }
    } else if (card.name == '7') {
        // if this is the last play it's pointless to look because you'll see it immediately anyway
        if (deck.number_of_cards = 0) {
            return null
        }
        const to_view = await played_by.select_player(played_by, players)
        if (to_view === played_by) {
            await played_by.slot(0).spin(1)
        } else {
            // show the card
            await to_view.slot(0).flip('X', !played_by.hidden_cards, 1)
            await sleep(SHOW_RESULT_DURATION)
            await to_view.slot(0).flip('X', !to_view.hidden_cards, 1)
        }
    } else if (card.name == '6') {
        const [guessed_on, guess] = await played_by.guess_card(played_by, players)
        if (guessed_on.card(0).value == guess.value) {
            return guessed_on
        }
        // show the wrong guess for everyone
        guessed_on.slot(0).show_its_not(guess)
        await sleep(SHOW_RESULT_DURATION)
        guessed_on.slot(0).render_default()
    }
    return null
}

async function run_game(opponents) {
    set_message('')
    const players = [new Player(
            'Du',
            'you',
            false,
            card=>card.show(),
            set_message,
            click_card,
            click_player,
            click_guess
    )]
    for (let n=1; n<=opponents; n++) {
        players.push(new Player(
                'Motstander '+n,
                'opponent'+n,
                true,
                card=>card.highlight(),
                ()=>{},
                select_random_card,
                select_random_player,
                guess_random_player
        ))
    }

    const removed_card = new CardSlot(document.getElementById('removed-card'), true)
    const played_cards = new CardSlot(document.getElementById('played-cards'), false)
    const deck = new Deck(document.getElementById('undealt-cards'))
    const parent = document.getElementById('table')

    await deal_cards(players, deck, removed_card, parent)
    let players_turn = 0

    while (deck.number_of_cards > 0 && players.length > 1) {
        players[players_turn].make_active()
        // draw a card from the deck and add it to the hand
        const draws = await animate_move(deck, players[players_turn].add_card(), parent, 0.8)

        const index = await players[players_turn].select_card_to_play(players[players_turn])
        const plays = await animate_move(
                players[players_turn].slot(index),
                played_cards,
                parent,
                0.7
        )
        players[players_turn].remove_card(index)
        console.log(players[players_turn].name+' plays '+plays.name)

        const lost = await take_effect(
                plays,
                players[players_turn],
                players,
                deck,
                played_cards,
                parent
        )
        if (lost) {
            if (lost.number_of_cards > 0) {
                await lost.slot(0).flip('Y', true, 0.5)
            }
            lost.make_lost()
            set_message(lost.name+' tapte')
            console.log(lost.name+' lost')
            const lost_index = players.indexOf(lost)
            players.splice(lost_index, 1)
            // undo later increment if the player at the same index is now a different one
            if (lost_index <= players_turn) {
                players_turn--
            }
        } else if (!players[players_turn].immune) {
            players[players_turn].make_idle()
        }
        players_turn = (players_turn+1) % players.length
    }

    // reveal cards
    for (const player of players) {
        for (let i=0; i<player.number_of_cards; i++) {
            player.slot(i).show()
        }
    }
    if (deck.number_of_cards == 0) {
        removed_card.show()
    }

    // find winner
    const remaining = players.filter(p => !p.lost)
    // if one remaining, keep the message about who last lost
    if (remaining.length == 0) {
        set_message('Alle tapte!')
    } else if (remaining.length > 1) {
        const highest_value = remaining.map(p => p.card(0).value).reduce((a,b)=>Math.max(a,b))
        const with_highest = remaining.filter(p => p.card(0).value == highest_value)
        if (with_highest.length == 1) {
            set_message(with_highest[0].name+' vant!')
        } else {
            set_message('Det ble uavgjort.')
        }
    }

    add_start_button('Del ut på nytt')
}

function add_start_button(button_text) {
    const button = document.createElement('button')
    button.id = 'start'
    button.textContent = button_text
    button.addEventListener("click", (event) => {
        // remove the button
        event.target.parentNode.removeChild(event.target)
        run_game(2)
    })
    document.getElementById('buttons').appendChild(button)
}

window.onload = (event) => {
    add_start_button('Del ut')
    document.getElementById('start').click()
}

// @license-end
