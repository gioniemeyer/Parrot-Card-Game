let IsValid;
let NumberOfCards;
let Cards = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revestitparrot", "tripletsparrot", "unicornparrot"];


function HowManyCards() {

    AskCheckNumber()

    while(isValid === false) {
        AskCheckNumber()
    }

    for(let i = 0; i < NumberOfCards / 2; i++) {
        let Board = document.querySelector('ul');
        Board.innerHTML += `<li onclick="TurnCard(this)">
        <img class="front" src="images/front.png" alt="parrot card">
        <img class="back hidden" src="images/${Cards[i]}.gif" alt="parrot card">
        </li>
        <li onclick="TurnCard(this)">
        <img class="front" src="images/front.png" alt="parrot card">
        <img class="back hidden" src="images/${Cards[i]}.gif" alt="parrot card">
        </li>`;
    }     
}

function TurnCard(NumberOfCard) {
    const standartParrot = NumberOfCard.children [0];
    standartParrot.classList.toggle('hidden');

    const gifParrot = NumberOfCard.children [1];
    gifParrot.classList.toggle('hidden');

    // const CardTurned = document.querySelector(NumberOfCard.children + ' front');
    // CardTurned.classList.toggle('hidden');

}

function AskCheckNumber() {

    NumberOfCards = prompt('Com quantas cartas você quer jogar?');

    if(3 < NumberOfCards && NumberOfCards < 15 && NumberOfCards % 2 === 0) {
        isValid = true;
    } else {
        isValid = false;
    }
}
HowManyCards()
