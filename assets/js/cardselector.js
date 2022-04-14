
// fuction to create the card

function createCards(parentCard, shuffleCards){
    let cardlist =[];
    for (let i = 0; i<= 11; i++){
        let newCard = appendNewCard(parentCard);
        newCard.classList.add(shuffleCards);
        var cardObjects ={
            index: 1,
            element: newCard,
            imageclass: shuffleCards,
        };
        cardlist.push(cardObjects);
    }
    return cardlist;
}


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
    // have selection of food come here to shuffle in cards
    // grabs selected variable from local storage
    let selected = ["American", "Argentinian", "BBQ"];
    // let wordArray =["image-1","image-1","image-2","image-2"];
    // let wordArray = ["American", "Argentinian", "BBQ","Brazilian", "Burgers", "British","Burgers", "Caribbean","Cajun","Chinese","Ethipoian","Filipino","French","Greek","Hawaiian","Indian","Italian","Japanese","Korean","Korean BBQ","Lebanese","Mexican","Morocaan","Middle Eastern","Pasta","Persian","Pizza","Pho","Ramen","Salad","Sandwiches","Seafood","Soup","Tacos","Taiwanese","Thai","Vegan","Vegetarian","Vietnamese"];
    for (var i = selected.length -1; i >0; i--){
        var j =Math.floor(Math.random() * (i+1));
        var temp = selected[i];
        selected[i] = selected[j]
        selected[j] = temp;  
    } 
    return;
}




// change to jquery onClick to flip card
function cardFlipWhenClicked(cardObjects){
    cardObjects.element = function (){
        // add event listener here for on  click response
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
    for (let i = 0; i < cardObjects.length; i++){
        cardFlipWhenClicked(cardObjects);
    }
}



// add a re-shuffle button
$('#reshufflebtn').click(function(event) {
    event.preventDefault();
    console.log('button clicked');
    // invoke shuffle function (using jquery)
});

// add a reselect button
$('#reselectbtn').click(function(event) {
    event.preventDefault();
    console.log('button clicked');
    // link to resultspage.html
    window.location.href='index.html';
});

// add on click event listener to resultbtn
$('#result').click(function(event) {
    event.preventDefault();
    console.log('button clicked');
    // link to resultspage.html
    window.location.href='resultsPage.html';
});
