let IsValid;
let NumberOfCards;
let Cards = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
let jogadas = 0;
const lista = []


function HowManyCards() {

    AskCheckNumber();

    while(isValid === false) {
        AskCheckNumber();
    }

    for(let x = 0; x < NumberOfCards / 2; x++) {
        lista.push(Cards[x]);
        lista.push(lista[x]);
    }

    lista.sort(comparador);

    for(let i = 0; i < lista.length; i++) {

        let Board = document.querySelector('ul');
        Board.innerHTML += `<li onclick="TurnCard(this)">
        <img class="standardParrot" src="images/front.png" alt="parrot card">
        <img class="gifParrot hidden" src="images/${lista[i]}.gif" alt="parrot card">
        </li>`;
    }
   
}
  
function comparador() {
    return Math.random() - 0.5;
}

function TurnCard(NumberOfCard) {
    const standartParrot = NumberOfCard.children [0];
    standartParrot.classList.toggle('hidden');

    const gifParrot = NumberOfCard.children [1];
    gifParrot.classList.toggle('hidden');
    gifParrot.classList.add('chosen');

    // let Jogadas = 0;
    // Jogadas = Jogadas + 1;
    // Alert(Jogadas);

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
