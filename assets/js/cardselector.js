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
    let wordArray = ["American", "Argentinian", "BBQ","Brazilian", "Burgers", "British","Burgers", "Caribbean","Cajun","Chinese","Ethipoian","Filipino","French","Greek","Hawaiian","Indian","Italian","Japanese","Korean","Korean BBQ","Lebanese","Mexican","Morocaan","Middle Eastern","Pasta","Persian","Pizza","Pho","Ramen","Salad","Sandwiches","Seafood","Soup","Tacos","Taiwanese","Thai","Vegan","Vegetarian","Vietnamese"];
    return wordArray.shuffle(wordArray);
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

function incrementCounter(counterName, parentCard){
    if (counters[counterName] == undefined){
        counters[counterName] = 0;
    }
    counters[counterName]++;
    parentCard.innerHTML = counters[counterName];
}
function cardFlipWhenClicked(cardObjects){
    cardObjects.element.onclick = function (){
        if (cardObjects.element.classList.contains("flipped")){
            return;
        }
        cardObjects.element.classList.add("flipped");
    }
}

// set up cards
let cardObjects =
    createCards(document.getElementById("card-container"), shuffleCards());
if (cardObjects !=null){
    
}