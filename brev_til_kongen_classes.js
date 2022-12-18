// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3.0

/// Holds the information on a card.
/// Instances should not be mutated.
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

/// Create and return the element for a CardSlot.
function create_card(parent_node) {
    let card_node = document.createElement('div')
    card_node.classList.add('card')
    parent_node.appendChild(card_node)
    return card_node
}

function remove_all_children(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild)
    }
}

/// A viewed card.
/// It is used both for cards in the hand of a player, and for the cards on the table.
class CardSlot {
    /// To create a new element, pass create_card(parent_node) as node
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
    /// Make a card slot empty
    /// This removes the card but not the node
    no_card() {
        this._card = null
        remove_all_children(this.node)
        this.node.classList.remove('hidden-card')
        this.node.classList.add('no-card')
    }
    /// Return the card and make the slot empty.
    /// Throws if the slot is already empty.
    take_card() {
        const card = this._card
        if (!card) {
            throw Error('There is already no card')
        }
        this.no_card()
        return card
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
    /// Hide the card and add clickable buttons to its back for all values except 6.
    /// The callback is passed two parameters when a button is clicked:
    /// 1. a Card representing the guessed value, 2: the args argument passed to this function
    make_guessable(callback, args) {
        this.hide()
        for (const value in CARD_BY_VALUE) {
            if (value != 6) {
                const card = CARD_BY_VALUE[value]
                this.node.appendChild(document.createElement('p')).textContent = card.name
                // this callback doesn't need to be removable
                // because the nodes will be removed when guessing is finished
                this.node.lastChild.addEventListener('mousedown', ()=>callback(card, args))
            }
        }
    }
    /// Hide the card and show which guess was incorrect
    show_its_not(card) {
        this.hide()
        const inner = this.node.appendChild(document.createElement('p'))
        inner.textContent = card.name
        inner.classList.add('wrong-guess')
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

/// Holds the undealt cards.
/// Can be used as a CardSlot for animating.
class Deck {
    constructor(node) {
        this.slot = new CardSlot(node, true)
        this.cards = []
        this.hidden = true
    }
    /// Returns the node for the slot.
    get node() {
        return this.slot.node
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
    /// Return the topmost card, and make the slot empty if it was the last card.
    /// Throws if the deck is already empty.
    take_card() {
        if (this.cards.length == 0) {
            throw error('deck is empty')
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
    constructor(
            name, player_id,
            hidden_cards, view_others_card, render_feedback,
            select_card_to_play, select_player, guess_card
    ) {
        this.name = name
        this.cards = []
        this.player_node = document.getElementById(player_id)
        this.hand_node = document.getElementById(player_id+'-cards')
        this.hidden_cards = hidden_cards
        this.view_others_card = view_others_card
        this.render_feedback = render_feedback
        this.select_card_to_play = select_card_to_play
        this.select_player = select_player
        this.guess_card = guess_card
        this.make_idle(false)
        this.remove_all_cards()
    }
    add_card(card) {
        const slot = new CardSlot(create_card(this.hand_node), this.hidden_cards, card)
        this.cards.push(slot)
        return slot
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

    change_state(state) {
        if (!this.state) {
            this.player_node.className = 'player'
            this.player_node.classList.add(state)
        } else if (this.state != state) {
            this.player_node.classList.replace(this.state, state)
        }
        this.state = state
    }
    make_idle() {
        this.change_state('idle')
    }
    make_active() {
        this.change_state('active')
    }
    make_lost() {
        for (const slot of this.cards) {
            slot.show()
        }
        this.change_state('lost')
    }
    make_immune() {
        this.change_state('immune')
    }
    get lost() {
        return this.state == 'lost'
    }
    get immune() {
        return this.state == 'immune'
    }
}

/// Animate moving a card from one slot to another.
/// It effectively does `to.set_card(from.take_card()); return to.card`
async function animate_move(from, to, common_parent_node, speed_factor) {
    const outer_rect = common_parent_node.getBoundingClientRect()
    const from_rect = from.node.getBoundingClientRect()
    const to_rect = to.node.getBoundingClientRect()

    const moving = new CardSlot(create_card(common_parent_node), from.hidden, from.take_card())
    moving.node.id = 'moving-card'
    const animation = moving.node.animate([
        {// from
            left: (from_rect.left-outer_rect.left)+'px',
            top: (from_rect.top-outer_rect.top)+'px'
        },
        {// to
            left: (to_rect.left-outer_rect.left)+'px',
            top: (to_rect.top-outer_rect.top)+'px'
        }
    ], {
        duration: 500*speed_factor,
        iterations: 1
    })

    const animation_done = new Promise(animation_complete => {
        animation.onfinish = animation_complete
    })
    await animation_done
    to.set_card(moving.delete())
    return to.card
}

// @license-end
