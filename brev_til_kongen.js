// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3.0
class Card {
    constructor(name, value, icon, description) {
        this.name = name
        this.value = value
        this.icon = icon
        this.description = description
    }
}

const CARD_BY_VALUE = {
    13: new Card('K', 13, '💔'/*☠️*/, "Man taper hvis man spiller den eller må kaste den"),
    12: new Card('Q', 12, ' ', 'Har ingen effekt, men må spilles hvis man har knekt eller 10'),
    11: new Card('J', 11, '🔀', 'Velg en spiller å bytte gjenverende kort med'),
    10: new Card('10', 10, '🔃', 'Velg en spiller som må trekke nytt kort'),
    9: new Card('9', 9, '🛡️', 'Du er imun - ingen kan velge deg inntil det er din tur igjen'),
    8: new Card('8', 8, '⚔️', 'Duell - Velg en spiller å sammenligne kort med, den som har lavest taper, har dere likt forsetter dere'),
    7: new Card('7', 7, '👀', 'Velg en spiller å se kortet til'),
    6: new Card('6', 6, '❓', 'Velg en spiller å gjette kortet til - gjetter du riktig taper han, men du kan ikke gjette 6')
}

function shuffled_deck() {
    let deck = []
    const number_of_cards = {13:1, 12:1, 11:1, 10:2, 9:2, 8:2, 7:2, 6:5}
    for (const value in number_of_cards) {
        for (let i=0; i<number_of_cards[value]; i++) {
            deck.push(CARD_BY_VALUE[value])
        }
    }

    // shuffle, from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    let currentIndex = deck.length
    let randomIndex
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        // And swap it with the current element.
        [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]]
    }

    return deck
}

function create_card(parent_id) {
    let card = document.createElement('div')
    card.classList.add('card')
    document.getElementById(parent_id).appendChild(card)
    return card
}

function remove_all_children(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild)
    }
}

function set_message(text) {
    document.getElementById('message').textContent = text
}

/// A viewed card.
/// It is used both for cards in the hand of a player, and for the cards on the table.
class CardSlot {
    /// To create a new element, pass create_card(parent_id) as node
    constructor(node, default_hidden, card) {
        if (!node) {
            throw Error("card element doesn't exist")
        }
        this._node = node
        this._card = card || null
        this.default_hidden = default_hidden
        this.render_default()
    }
    get node() {
        return this._node
    }
    has_card() {
        return !(this._card === null)
    }
    get card() {
        return this._card
    }
    /// Change which value to show
    /// Only used for card slots on the table
    set_card(card) {
        this._card = card
        this.render_default()
    }
    /// Make a card slot on the table empty.
    /// This removes the card but not the node
    no_card() {
        this._card = null
        remove_all_children(this.node)
        this.node.classList.remove('hidden-card')
        this.node.classList.add('no-card')
    }
    /// Removes the card node from its parent
    /// Returns the card.
    /// The CardSlot should not be used after this
    delete() {
        if (this._node && this._node.parentNode) {
            this._node.parentNode.removeChild(this._node)
        }
        return this._card
    }

    hide() {
        this.hidden = true
        if (this.has_card()) {
            this.node.classList.remove('no-card')
            this.node.classList.add('hidden-card')
            remove_all_children(this.node)
        }
    }
    show() {
        this.hidden = false
        if (this.has_card()) {
            this.node.classList.remove('no-card')
            this.node.classList.remove('hidden-card')
            remove_all_children(this.node)
            this.node.appendChild(document.createElement('p')).textContent = this._card.name
            this.node.appendChild(document.createElement('p')).textContent = this._card.icon
            this.node.appendChild(document.createElement('p')).textContent = this._card.name
        }
    }
    highlight() {
        this._highlight = true
        this.node.classList.add('highlighted-card')
    }
    /// Remove highlight and reset to default show/hide.
    render_default() {
        this._highlight = false
        this.node.classList.remove('highlighted-card')

        if (!this.has_card()) {
            this.no_card()
            this.hidden = this.default_hidden
        } else if (this.default_hidden) {
            this.hide()
        } else {
            this.show()
        }
    }
}

class Deck {
    constructor(node) {
        this.slot = new CardSlot(node, true)
        this.cards = []
    }
    set_cards(cards) {
        if (cards.length == 0 && this.cards.length > 0) {
            this.slot.no_card()
        } else if (this.cards.length == 0 && cards.length > 0) {
            // make it display hidden
            this.slot.set_card(cards[0])
        }
        this.cards = cards
    }
    get number_of_cards() {
        return this.cards.length
    }
    draw_card() {
        if (this.cards.length == 0) {
            console.log('deck is empty')
            return null
        }

        const card = this.cards.pop()
        //console.log('cards in deck after drawing one: ' + this.cards.length)
        if (this.cards.length == 0) {
            this.slot.no_card()
        }
        return card
    }
}

class Player {
    constructor(name, hand_id, hidden_cards, view_others_card, render_feedback, select_card_to_play, select_player) {
        this.name = name
        this.cards = []
        this.hand_id = hand_id
        this.hand_node = document.getElementById(hand_id)
        this.hidden_cards = hidden_cards
        this.view_others_card = view_others_card
        this.render_feedback = render_feedback
        this.select_card_to_play = select_card_to_play
        this.select_player = select_player
        this.set_immune(false)
        this.set_lost(false)
        this.remove_all_cards()
    }
    add_card(card) {
        this.cards.push(new CardSlot(create_card(this.hand_id), this.hidden_cards, card))
    }
    remove_card(index) {
        const slot = this.cards[index]
        slot.delete()
        this.cards.splice(index, 1)
        return slot.card
    }
    remove_all_cards() {
        this.cards.length = 0
        remove_all_children(this.hand_node)
    }
    get number_of_cards() {
        return this.cards.length
    }
    /// Get the Card value of a card. (the first one if not provided)
    card(index) {
        return this.cards[index || 0].card
    }
    /// Get the CardSlot for a card. (the first one if not provided)
    slot(index) {
        return this.cards[index || 0]
    }
    get lost() {
        return this._lost
    }
    set_lost(lost) {
        if (lost) {
            for (const slot of this.cards) {
                slot.show()
            }
            this.hand_node.parentNode.classList.add('lost')
        } else {
            this.hand_node.parentNode.classList.remove('lost')
        }
        this._lost = lost
    }
    get immune() {
        return this._immune
    }
    set_immune(immune) {
        this._immune = immune
        if (immune) {
            this.hand_node.parentNode.classList.add('immune')
        } else {
            this.hand_node.parentNode.classList.remove('immune')
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function select_random_card(player) {
    // wait a bit
    await sleep(600)

    let index
    do {
        index = Math.floor(Math.random()*player.number_of_cards)
    } while (!can_play(player, index));
    return index
}

async function select_random_player(player, players) {
    if (players.every(p => p == player || p.immune)) {
        return player
    }

    // wait a bit
    await sleep(600)

    let index
    do {
        index = Math.floor(Math.random()*players.length)
    } while (players[index].immune);
    return players[index]
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

    let index = await valid_selected

    // disable selecting
    player.hand_node.classList.remove('pick-one')
    for (let i=0; i<player.number_of_cards; i++) {
        player.slot(i).node.removeEventListener('click', card_clicked)
    }

    //await new Promise(resolve=>{})
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
            if (p.hand_id === node.id) {
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
    let selected_player = await select_player
    // disable selecting
    for (let p of players) {
        p.hand_node.classList.remove('pick-one')
        p.hand_node.removeEventListener('click', player_clicked)
    }
    return selected_player
}

function deal_cards(players, deck, removed_card) {
    deck.set_cards(shuffled_deck())
    console.log('cards in deck before dealing: ' + deck.number_of_cards)

    // remove one card when less than four players
    if (players.length < 4) {
        removed_card.set_card(deck.draw_card())
    }

    // give cards
    for (const player of players) {
        player.add_card(deck.draw_card())
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

async function take_effect(card, played_by, players, deck, played_cards) {
    const SHOW_RESULT_DURATION = 750
    if (card.name == 'J') {
        const swap_with = await played_by.select_player(played_by, players)
        // TODO reject swapping with one self?
        swap_with.add_card(played_by.remove_card(0))
        played_by.add_card(swap_with.remove_card(0))

        // show the card that the opponent got
        played_by.view_others_card(swap_with.slot(0))
        played_by.slot(0).highlight()
        await sleep(SHOW_RESULT_DURATION)
        swap_with.slot(0).render_default()
        played_by.slot(0).render_default()
    } else if (card.name == '10' && deck.number_of_cards > 0) {
        const to_draw = await played_by.select_player(played_by, players)
        played_cards.set_card(to_draw.remove_card(0))
        if (played_cards.card.name == 'K') {
            to_draw.set_lost(true)
            return to_draw
        }
        to_draw.add_card(deck.draw_card())

        // show which player
        to_draw.slot(0).highlight()
        played_cards.highlight()
        await sleep(SHOW_RESULT_DURATION)
        to_draw.slot(0).render_default()
        played_cards.render_default()
    } else if (card.name == '9') {
        played_by.set_immune(true)
        await sleep(SHOW_RESULT_DURATION/2)
    } else if (card.name == '8') {
        const duel_with = await played_by.select_player(played_by, players)
        if (played_by.card(0).value > duel_with.card(0).value) {
            duel_with.set_lost(true)
            return duel_with
        } else if (played_by.card(0).value < duel_with.card(0).value) {
            // show what the other player had
            played_by.view_others_card(duel_with.slot(0))
            await sleep(SHOW_RESULT_DURATION)
            duel_with.slot(0).render_default()

            played_by.set_lost(true)
            return played_by
        } else {
            // show that the other player had the same card
            played_by.view_others_card(duel_with.slot(0))
            await sleep(SHOW_RESULT_DURATION*2)
            duel_with.slot(0).render_default()
        }
    } else if (card.name == '7') {
        const to_view = await played_by.select_player(played_by, players)
        // show the card
        played_by.view_others_card(to_view.slot(0))
        await sleep(SHOW_RESULT_DURATION*2)
        to_view.slot(0).render_default()
    }
    return null
}

async function run_game(opponents) {
    set_message('')
    const players = [new Player(
            'Du',
            'your-cards',
            false,
            card=>card.show(),
            set_message,
            click_card,
            click_player
    )]
    for (let n=1; n<=opponents; n++) {
        players.push(new Player(
                'Motstander '+n,
                'opponent'+n+'-cards',
                true,
                card=>card.highlight(),
                ()=>{},
                select_random_card,
                select_random_player
        ))
    }

    const removed_card = new CardSlot(document.getElementById('removed-card'), true)
    const played_cards = new CardSlot(document.getElementById('played-cards'), false)
    const deck = new Deck(document.getElementById('undealt-cards'))

    deal_cards(players, deck, removed_card)
    let players_turn = 0

    while (deck.number_of_cards > 0 && players.length > 1) {
        players[players_turn].set_immune(false)
        const draws = deck.draw_card()
        players[players_turn].add_card(draws)

        const index = await players[players_turn].select_card_to_play(players[players_turn])
        const plays = players[players_turn].remove_card(index)
        played_cards.set_card(plays)
        console.log(players[players_turn].name+' plays '+plays.name)

        const lost = await take_effect(plays, players[players_turn], players, deck, played_cards)
        if (lost) {
            set_message(lost.name+' tapte')
            console.log(lost.name+' lost')
            players.splice(players.indexOf(lost), 1)
            players_turn--
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
