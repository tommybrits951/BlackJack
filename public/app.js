class Player {
    constructor()
}
const deck = ["./images/ace_of_clubs.png", "./images/ace_of_diamonds.png", "./images/ace_of_hearts.png", "./images/ace_of_spades.png", "./images/2_of_clubs.png", "./images/2_of_diamonds.png", "./images/2_of_hearts.png", "./images/2_of_spades.png", "./images/3_of_clubs.png", "./images/3_of_diamonds.png", "./images/3_of_spades.png", "./images/3_of_hearts.png", "./images/4_of_hearts.png", "./images/4_of_clubs.png", "./images/4_of_diamonds.png", "./images/4_of_spades.png", "./images/5_of_clubs.png", "./images/5_of_diamonds.png", "./images/5_of_hearts.png", "./images/5_of_spades.png", "./images/6_of_clubs.png", "./images/6_of_diamonds.png", "./images/6_of_hearts.png", "./images/6_of_spades.png", "./images/7_of_clubs.png", "./images/7_of_diamonds.png", "./images/7_of_hearts.png", "./images/7_of_spades.png", "./images/8_of_clubs.png", "./images/8_of_diamonds.png", "./images/8_of_hearts.png", "./images/8_of_spades.png", "./images/9_of_clubs.png", "./images/9_of_diamonds.png", "./images/9_of_hearts.png", "./images/9_of_spades.png", "./images/10_of_clubs.png", "./images/10_of_diamonds.png", "./images/10_of_hearts.png", "./images/10_of_spades.png", "./images/jack_of_clubs2.png", "./images/jack_of_diamonds2.png", "./images/jack_of_hearts2.png", "./images/jack_of_spades2.png", "./images/queen_of_clubs2.png", "./images/queen_of_diamonds2.png", "./images/queen_of_hearts2.png", "./images/queen_of_spades2.png", "./images/king_of_clubs2.png", "./images/king_of_diamonds2.png", "./images/king_of_hearts2.png", "./images/king_of_spades2.png"]
const points = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
const user = document.querySelector("#userHand")
const dealer = document.querySelector("#dealerHand")
let table = []
let userHand = []
let dealerHand = []
let userScore = 0;
let dealerScore = 0;

function randomNumber(hand) {
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(Math.random() * 52)
        if (table.includes(x)) {
            i--
        } else {
            hand.push(x)
            table.push(x)
            return x
        }
    }
}

function drawCard(hand, player) {
    for (let i = 0; i < hand.length; i++) {
        const img = document.createElement("img")
        img.classList.add("cardImg")
        img.src = deck[hand[i]]
        const cardDiv = document.createElement("cardDiv")
        cardDiv.classList.add("cardDiv")
        cardDiv.append(img)
        player.append(cardDiv)
    }
}

