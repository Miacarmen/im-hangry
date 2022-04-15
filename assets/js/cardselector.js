var stored = localStorage.getItem("selected");
var cuisine = JSON.parse(stored);

for (let i = 0; i < cuisine.length; i++) {
//   var cardContainer = document.getElementById("card-container");
  var card = document.createElement("div");

  var cardcontainer = $('#card-container').append(card);
  card.classList.add("card-down, card-up");
  card.classList.add("card-up");
  card.textContent = cuisine[i];
  //   $(card).append($(`<img src='./assets/pics/cardimage.png' width='125px' height='175px'>`));
  cardcontainer.appendChild(card);
  //   adding background image to card

  
  // add text content to each card if class = card-up
}

// $(`<img src='./assets/pics/cardimage.png'>`).appendTo(".card-down");
$(card).click(function() {
    card.classList.add('card-up');
    card.classList.remove('card-down');
});

// function for card shuffle
function shuffleCards(arr) {
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
console.log("shuffled");
console.log(cuisine);

// Flip card--- add a disable button to stop other cards from being flipped after one card is flipped
var flipped = false;
$(".card-down").click(function () {
  // toggle card-up
  $(this).toggleClass("card-up");
  console.log("flip");

  $(this).toggleClass("card-down");

  // toggle card-up
  $(this).toggleClass("card-up");
  console.log("flip");

  $(this).toggleClass("card-down");

  if (!flipped) {
    flipped = true;
    $(this).toggleClass("flipped");
  }

  // $("flipped").attr("disabled", true);
  // onclick = save(); this.disabled = true;

  // $("flipped").attr("disabled", true);
  // onclick = save(); this.disabled = true;
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
