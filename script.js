let IsValid;
let NumberOfCards;
let Cards = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
let moves = 0;
const GifsList = []
let FirstOfPair;
let acertos = 0;

function DistributionOfCards() {

    AskECheckNumber();

    while(isValid === false) {
        AskECheckNumber();
    }

    for(let x = 0; x < NumberOfCards / 2; x++) {
        GifsList.push(Cards[x]);
        GifsList.push(Cards[x]);
    }

    GifsList.sort(comparador);

    for(let i = 0; i < GifsList.length; i++) {

        let Board = document.querySelector('ul');
        Board.innerHTML += `<li onclick="TurnCard(this)">
        <img class="standardParrot" src="images/front.png" alt="parrot card">
        <img class="gifParrot hidden" src="images/${GifsList[i]}.gif" alt="parrot card">
        </li>`;
    }
}

function TurnCard(NumberOfCard) {

    moves += 1;

    TurningCard(NumberOfCard)

    if(FirstOfPair === undefined) {
        FirstOfPair = NumberOfCard;
    } else if(FirstOfPair.innerHTML === NumberOfCard.innerHTML) {
        FirstOfPair.setAttribute('onclick', "");
        NumberOfCard.setAttribute('onclick', "");
        acertos += 1
        FirstOfPair = undefined;
    } else {
        setTimeout(TurningCard, 2000, NumberOfCard);
        setTimeout(TurningCard, 2000, FirstOfPair);
        FirstOfPair = undefined;
    }
}

function TurningCard(NumberOfCard) {
    NumberOfCard.classList.toggle('chosen');

    const standardParrot = NumberOfCard.children [0];
    standardParrot.classList.toggle('hidden');

    const gifParrot = NumberOfCard.children [1];
    gifParrot.classList.toggle('hidden');
}

function AskECheckNumber() {

    NumberOfCards = prompt('Com quantas cartas você quer jogar?');

    if(3 < NumberOfCards && NumberOfCards < 15 && NumberOfCards % 2 === 0) {
        isValid = true;
    } else {
        isValid = false;
    }
}

function comparador() {
    return Math.random() - 0.5;
}

DistributionOfCards()