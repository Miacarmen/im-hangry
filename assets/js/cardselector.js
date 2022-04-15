var stored = localStorage.getItem("selected");
var cuisine = JSON.parse(stored);

    



for (let i = 0; i < cuisine.length; i++) {
  var cardContainer = document.getElementById("card-container");
  var card = document.createElement("div");
  card.classList.add("card-down","card-up");
  card.classList.add("card-up");
  card.textContent = "card";
  cardContainer.appendChild(card);
//   adding background image to card
//   $(`<img src='assets/pics/cardimage.png'>`).appendTo("card-container");
//   $(card).attr("src","assets/pics/cardimage.png");
}





// function for card shuffle
function shuffleCards (arr) {
  // have selection of food come here to shuffle in cards
  // grabs selected variable from local storage
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

console.log(cuisine);
shuffleCards(cuisine);
console.log('shuffled');
console.log(cuisine);



// Flip card
$('.card-down').click(function(){
    $(this).toggleClass('flipped');
    console.log("flip");
});

// add a re-shuffle button
$("#reshufflebtn").click(function (event) {
  event.preventDefault();
  console.log("button clicked");
  // invoke shuffle function (using jquery)

});
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

