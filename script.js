let IsValid;
let NumberOfCards;
let Cards = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
let moves = 0;
const GifsList = []
let FirstOfPair;
let hits = 0;
let TimerOnScreen;
let Answer;

function DistributionOfCards() {

    Cards.sort(compare);

    AskECheckNumber();

    while(isValid === false) {
        AskECheckNumber();
    }

    for(let x = 0; x < NumberOfCards / 2; x++) {
        GifsList.push(Cards[x]);
        GifsList.push(Cards[x]);
    }

    GifsList.sort(compare);

    for(let i = 0; i < GifsList.length; i++) {

        let Board = document.querySelector('ul');
        Board.innerHTML += `<li onclick="CheckPair(this)">
        <img class="front-face" src="images/front.png" alt="parrot card">
        <img class="back-face" src="images/${GifsList[i]}.gif" alt="parrot card">
        </li>`;
    }
}

function CheckPair(NumberOfCard) {

    moves += 1;

    TurnCard(NumberOfCard)

    if(FirstOfPair === undefined) {
        FirstOfPair = NumberOfCard;
    } else if(FirstOfPair.innerHTML === NumberOfCard.innerHTML && FirstOfPair !== NumberOfCard) {
        FirstOfPair.setAttribute('onclick', "");
        NumberOfCard.setAttribute('onclick', "");
        hits += 1
        clearInterval(Id);
        FirstOfPair = undefined;
    } else {
        setTimeout(TurnCard, 1000, NumberOfCard);
        setTimeout(TurnCard, 1000, FirstOfPair);
        FirstOfPair = undefined;
    }

    if(hits === NumberOfCards / 2) {
        setTimeout(alert, 1000, `Você ganhou em ${moves} jogadas em ${TimerOnScreen} segundos!`);
        Answer = setTimeout(PlayAgaing, 1000);
    }
}

function PlayAgaing() {
    Answer = prompt("Quer jogar de novo (sim ou não)?");

    if(Answer === 'sim') {
        window.location.reload(true)    
    }
}

function TurnCard(NumberOfCard) {

    NumberOfCard.classList.toggle('rotate');

}

function AskECheckNumber() {

    NumberOfCards = prompt('Com quantas cartas você quer jogar?');

    if(3 < NumberOfCards && NumberOfCards < 15 && NumberOfCards % 2 === 0) {
        isValid = true;
    } else {
        isValid = false;
    }

    Id = setInterval(timer, 1000);

}

function timer(NumberOfCards) {
    
    if(NumberOfCards !== 0) {
        TimerOnScreen = parseInt(document.querySelector('p').innerHTML);
        TimerOnScreen += 1;
        document.querySelector('p').innerHTML = TimerOnScreen;
    }
}

function compare() {
    return Math.random() - 0.5;
}

DistributionOfCards()