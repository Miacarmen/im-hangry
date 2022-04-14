var toWheel = $("#toWheel");
const welcomeButton = document.getElementById('welcomebtn');
const foodList = document.getElementById('list');
const nextButton = document.getElementById('next');

console.log("script is linked")
// var APIkey = ""
// var targetURL = "https://api.spoonacular.com/recipes/complexSearch?cuisine=indian&apiKey=446369fd8c0b4e3eb39992c76f883a83"
// fetch(targetURL)
//     .then(function(response) {
//         console.log(response)
//         return response.json()
//     })
//     .then(data => console.log(data))
//
// toWheel.on('click', () => {
//     document.location = "./wheelPage.html"
// })




// grab updated selected array

// update cards with array items

// 
welcomeButton.addEventListener('click', welcome)
foodList.classList.add('hide');
nextButton.classList.add('hide');

function welcome() {
    console.log('ive been clicked')
    welcomeButton.classList.add('hide')
    foodList.classList.remove('hide')
    nextButton.classList.remove('hide')
}




// add event listener for on click of checkboxes

// add event listener for status checked for form inputs


var selected = [];
// event listener for next button
// update cards with selected array
$('#next').click(function(event) {
    event.preventDefault();
    console.log('button clicked');
    $('.check').each(function() {
        // if checkbox is checked
        console.log(this.checked);
        if (this.checked) {
            console.log($(this).val());
            selected.push($(this).val());
        }
    })
    console.log(selected);
    // window.location.href='cardselectorPage.html';
});



// on click of next button
// update cards with list of selected foods

// hide list screen
// display card screen

// CARDSELECTOR.js HERE

// on click of random card
// pull api 
