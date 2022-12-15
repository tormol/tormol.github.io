// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3.0
class Card {
    constructor(name, value, icon, description) {
        this.name = name
        this.value = value
        this.icon = icon
        this.description = description
    }
}

function shuffled_deck() {
    const cards = {
        "K": new Card('K', 13, '💔'/*☠️*/, "Man taper hvis man spiller den eller må kaste den"),
        "Q": new Card('Q', 12, ' ', 'Har ingen effekt, men må spilles hvis man har knekt eller 10'),
        'J': new Card('J', 11, '🔀', 'Velg en spiller å bytte gjenverende kort med'),
        '0': new Card('10', 10, '🔃', 'Velg en spiller som må trekke nytt kort'),
        '9': new Card('9', 9, '🛡️', 'Du er imun - ingen kan velge deg inntil det er din tur igjen'),
        '8': new Card('8', 8, '⚔️', 'Duell - Velg en spiller å sammenligne kort med, den som har lavest taper, har dere likt forsetter dere'),
        '7': new Card('7', 7, '👀', 'Velg en spiller å se kortet til'),
        '6': new Card('6', 6, '❓', 'Velg en spiller å gjette kortet til - gjetter du riktig taper han, men du kan ikke gjette 6')
    }
    let deck = 'KQJ0099887766666'.split('').map(c => cards[c]);

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

let cards_in_deck = []
let opponent_cards = []
let your_cards = []
let removed_card = null

function create_card(parent_id, extra_class) {
    let card = document.createElement('div')
    card.classList.add('card')
    if (extra_class) {
        card.classList.add(extra_class)
    }
    document.getElementById(parent_id).appendChild(card)
    return card
}

function remove_all_children(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild)
    }
}

function show_card(card_node, card) {
    card_node.classList.remove('no-card')
    card_node.classList.remove('hidden-card')
    remove_all_children(card_node)
    card_node.appendChild(document.createElement('p')).textContent = card.name
    card_node.appendChild(document.createElement('p')).textContent = card.icon
    card_node.appendChild(document.createElement('p')).textContent = card.name
    return card_node
}
function hide_card(card_node) {
    remove_all_children(card_node)
    card_node.classList.remove('no-card')
    card_node.classList.add('hidden-card')
}
function remove_card(card_node) {
    remove_all_children(card_node)
    card_node.classList.remove('hidden-card')
    card_node.classList.add('no-card')
}

function set_message(text) {
    document.getElementById('message').textContent = text
}

function draw_card_from_deck() {
    if (cards_in_deck.length == 0) {
        console.log('deck is empty')
        return null
    }

    const card = cards_in_deck.pop()
    console.log('cards in deck after drawing one: ' + cards_in_deck.length)
    if (cards_in_deck.length == 0) {
        remove_card(document.getElementById('undealt-cards'))
    }
    return card
}

function can_play(hand, index) {
    if (hand[index].name == 'J' || hand[index].name == '10') {
        for (let other_index=0; other_index<hand.length; other_index++) {
            if (other_index != index && hand[other_index].name == 'Q') {
                set_message('Du må spille damen')
                return false
            }
        }
    } else if (hand[index].name == 'K') {
        set_message('Du taper hvis du spiller kongen!')
        return false
    }
    set_message('')
    console.log(hand[index].name + ' is ok to play')
    return true
}

function opponents_turn() {
    const draws = draw_card_from_deck()
    if (!draws) {
        end_game()
        return
    }

    opponent_cards.push(draws)
    hide_card(create_card('opponent1-cards'))

    // wait a bit, possibly several times
    const move_time = 600
    function opponent_plays() {
        const index = Math.floor(Math.random()*2)
        if (!can_play(opponent_cards, index)) {
            setTimeout(opponent_plays, move_time)
            return
        }

        const card = opponent_cards[index]
        // remove the card
        opponent_cards.splice(index, 1)
        const card_holder = document.getElementById('opponent1-cards')
        card_holder.removeChild(card_holder.children[index])
        // show the card in the middle
        show_card(document.getElementById('played-cards'), card)
        your_turn()
    }
    setTimeout(opponent_plays, 600)
}

let your_cards_clickable = false

function you_play(event) {
    if (!your_cards_clickable) {
        console.log('not clickable')
        return
    }

    // find card node (instead of the child node that was clicked on)
    let node = event.target
    while (!node.classList.contains('card')) {
        console.log('clicked node '+node.nodeName+'#'+node.id+'.'+node.className+' is not .card')
        node = node.parentNode
    }

    // find the index of node in its parent
    const index = Array.prototype.indexOf.call(node.parentNode.children, node)

    if (!can_play(your_cards, index)) {
        return
    }

    // make the other card non-clickable
    your_cards_clickable = false
    node.parentNode.classList.remove('pick-one')

    const card = your_cards[index]
    console.log('Card '+index+' (a '+card.name+') is clickable')
    // remove the card
    your_cards.splice(index, 1)
    node.parentNode.removeChild(node)
    // show the card in the middle
    show_card(document.getElementById('played-cards'), card)
    opponents_turn()
}

function your_turn() {
    // give another card to you
    const card = draw_card_from_deck()
    if (!card) {
        return
    }

    your_cards.push(card)
    show_card(create_card('your-cards'), card)

    your_cards_clickable = true
    let card_holder = document.getElementById('your-cards')
    // childNodes includes text nodes, children doesn't
    for (let i=0; i<card_holder.children.length; i++) {
        card_holder.children[i].removeEventListener('click', you_play)
        card_holder.children[i].addEventListener('click', you_play)
    }
    card_holder.classList.add('pick-one')
}

function deal_cards() {
    // remove existing cards
    remove_all_children(document.getElementById('opponent1-cards'))
    remove_all_children(document.getElementById('your-cards'))
    opponent_cards.length = 0
    your_cards.length = 0
    remove_card(document.getElementById('played-cards'))
    remove_card(document.getElementById('removed-card'))

    removed_card = null

    set_message('')

    cards_in_deck = shuffled_deck();
    console.log('cards in deck before dealing: ' + cards_in_deck.length)
    hide_card(document.getElementById('undealt-cards'))

    // remove one card when less than four players
    removed_card = cards_in_deck.pop()
    hide_card(document.getElementById('removed-card'))

    // give card to you
    let your_card = cards_in_deck.pop()
    your_cards.push(your_card)
    show_card(create_card('your-cards'), your_card)

    // give card to opponent
    opponent_cards.push(cards_in_deck.pop())
    hide_card(create_card('opponent1-cards'))

    console.log('cards in deck after dealing: ' + cards_in_deck.length)

    your_turn()
}

function add_start_button(button_text) {
    const button = document.createElement('button')
    button.id = 'start'
    button.textContent = button_text
    button.addEventListener("click", (event) => {
        // remove the button
        event.target.parentNode.removeChild(event.target)
        deal_cards()
    })
    document.getElementById('buttons').appendChild(button)
}

function end_game() {
    console.log('no more cards')
    show_card(document.getElementById('opponent1-cards').firstChild, opponent_cards[0])
    show_card(document.getElementById('removed-card'), removed_card)

    if (your_cards[0].value > opponent_cards[0].value) {
        set_message('Du vant!')
    } else if (your_cards[0].value < opponent_cards[0].value) {
        set_message('Du tapte!')
    } else {
        set_message('Det ble uavgjort.')
    }
    add_start_button('Del ut på nytt')
}

window.onload = (event) => {
    add_start_button('Del ut')
    //document.getElementById('start').click()
}

// @license-end
