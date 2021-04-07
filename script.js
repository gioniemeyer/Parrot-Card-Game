let IsValid;
let NumberOfCards = [];


function TurnCard(NumberOfCard) {
    const selector = NumberOfCard + " " + 'img'
    const Card = document.querySelector(selector);
    Card.setAttribute('src','images/bobrossparrot.gif');
}

function HowManyCards() {


    AskCheckNumber()

    while(isValid === false) {
        AskCheckNumber()
    }

    // fazer as cartas aparecerem com innrHTML tal como coloquei no HTML

    for(let i = 0; i < NumberOfCards.length; i++) {
        let Board = document.querySelector('ul');
        Board.innerHTML += `<li class="card first-pair" onclick="TurnCard(this)">
        <img src="images/front 6.png" alt="parrot card">
        </li>`;
    }

            // NumberOfCards.push("teste");
        // console.log(NumberOfCards[i]);
     
}

function AskCheckNumber() {
    NumberOfCards.length = prompt('Com quantas cartas você quer jogar?');

    if(4 < NumberOfCards.length < 15 && NumberOfCards.length % 2 === 0) {
        isValid = true;
    } else {
        isValid = false;
    }
}

HowManyCards()
