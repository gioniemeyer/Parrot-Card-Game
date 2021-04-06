function TurnCard(NumberOfCard) {
    const CardNumber = document.querySelector(NumberOfCard);
}



function HowManyCards() {
    const NumberOfCards = prompt('Com quantas cartas você quer jogar?');
    let IsValid;

    if(4 < NumberOfCards < 15 && NumberOfCards % 2 === 0) {
        isValid = true;
    } else {
        isValid = false;
    }

    while(isValid === false) {
        const NumberOfCards = prompt('Com quantas cartas você quer jogar?');
        if(4 < NumberOfCards < 15 && NumberOfCards % 2 === 0) {
            isValid = true;
        } else {
            isValid = false;
        }
    } 
}

HowManyCards()
