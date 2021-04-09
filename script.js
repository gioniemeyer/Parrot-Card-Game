let IsValid;
let NumberOfCards;
let Cards = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
let moves = 0;
const GifsList = []
let FirstOfPair;
let SecondOfPair;

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

    NumberOfCard.classList.toggle('chosen');
    NumberOfCard.setAttribute('onclick', "");

    const standardParrot = NumberOfCard.children [0];
    standardParrot.classList.toggle('hidden');

    const gifParrot = NumberOfCard.children [1];
    gifParrot.classList.toggle('hidden');

    // pra girar a carta acho que preciso usar NumberOfCard.alguma coisa

    //pegar o conteudo do GifsList da primeira carta clicada
    //adicionar jogada
    //pegar o conteudo do GifsList da segunda carta clicada
    //adicionar jogada
    //comparar os indices
        // se as duas forem iguais, remover o onclick das duas
        // se as duas forem diferentes, add hidden no gifParrot e remove hidden do Standard Parrot

    if(FirstOfPair === undefined) {
        FirstOfPair = NumberOfCard;
    } else if(FirstOfPair.innerHTML === NumberOfCard.innerHTML) {
        alert('iguais')
        FirstOfPair = undefined;
    }








    
    // let Pairs = document.querySelectorAll('.chosen').length;
    // if(Pairs % 2 !== 0 ) {
    //     FirstOfPair = NumberOfCard.children [1];
    // } else {
    //     SecondOfPair = NumberOfCard.children [1];
    // }
    
    // if (FirstOfPair !== SecondOfPair) {
    //     FirstOfPair.setAttribute('onclick', "=TurnCard(this)");
    //     SecondOfPair.setAttribute('onclick', "=TurnCard(this)");
    // }

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