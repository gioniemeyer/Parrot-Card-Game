let IsValid;
let NumberOfCards;

function TurnCard(NumberOfCard) {
    const CardNumber = document.querySelector(NumberOfCard);
}

function HowManyCards() {

    AskCheckNumber()

    while(isValid === false) {
        AskCheckNumber()
    }

    // fazer as cartas aparecerem com innrHTML tal como coloquei no HTML
     
}

function AskCheckNumber() {
    NumberOfCards = prompt('Com quantas cartas você quer jogar?');

    if(4 < NumberOfCards < 15 && NumberOfCards % 2 === 0) {
        isValid = true;
    } else {
        isValid = false;
    }
}

HowManyCards()
