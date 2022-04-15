var stored = localStorage.getItem("selected");
console.log(stored);
var cuisine = JSON.parse(stored);

for (let i = 0; i < cuisine.length; i++) {
  var cardContainer = document.getElementById("card-container");
  var card = document.createElement("div");
  card.classList.add("card-down");
  card.textContent = "card" + i;
  cardContainer.appendChild(card);
  
}



// function for card shuffle
function shuffleCards() {
  // have selection of food come here to shuffle in cards
  // grabs selected variable from local storage

  for (var i = cards.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = cardContainer[i];
    cardContainer[i] = cardContainer[j];
    cardContainer[j] = temp;
  }
  console.log(cardContainer);
  return;
}



// change to jquery onClick to flip card
function cardFlipWhenClicked(cardObjects) {
  cardObjects.element = function () {
    // add event listener here for on  click response
    if (cardObjects.element.classList.contains("flipped")) {
      return;
    }
    cardObjects.element.classList.add("flipped");
  };
}





// add a re-shuffle button

$("#reshufflebtn").click(shuffleCards());



// add a reselect button
$("#reselectbtn").click(function (event) {
  event.preventDefault();
  console.log("button clicked");
  // link to resultspage.html
  window.location.href = "index.html";
});

// add on click event listener to resultbtn
$("#resultbtn").click(function (event) {
  event.preventDefault();
  console.log("button clicked");
  // link to resultspage.html
  window.location.href = "resultsPage.html";
});
