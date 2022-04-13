// function for parent card element
function appendNewCard(parentCard){
    let card = document.createElement("div");
    parentCard.appendChild(card);
    card.className ="card";
    let cardDown = document.createElement("div");
    let cardUp = document.createElement("div");
    cardDown.className ="card-down";
    cardUp.className= "card-up";
    return card;
}
// function for card shuffle
function shuffleCards(){
    let wordArray = [];
    return _.shuffle(wordArray);
}
// fuction to create the card
function createCards(parentCard, shuffleCards){
    let cardlist =[];
    for (let i = 0; i<= 11; i++){
        let newCard = appendNewCard(parentCard);
        newCard.classList.add(shuffleCards[i]);
        var cardObjects ={
            index: 1,
            element: newCard,
            imageclass: shuffleCards[i],
        };
        cardlist.push(cardObjects);
    }
    return cardlist;
}