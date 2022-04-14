var toWheel = $("#toWheel")
const welcomeButton = document.getElementById('welcomebtn')
const foodList = document.getElementById('list')

console.log("script is linked")
var APIkey = ""
var targetURL = "https://api.spoonacular.com/recipes/complexSearch?cuisine=indian&apiKey=446369fd8c0b4e3eb39992c76f883a83"
fetch(targetURL)
    .then(function(response) {
        console.log(response)
        return response.json()
    })
    .then(data => console.log(data))

toWheel.on('click', () => {
    document.location = "./wheelPage.html"
})




// grab updated selected array

// update cards with array items
welcomeButton.addEventListener('click', welcome)
    // when 'get started' buttons gets clicked, food options appear after
foodList.classList.add('hide');

function welcome() {
    console.log('ive been clicked')
    welcomeButton.classList.add('hide')
    foodList.classList.remove('hide')

}


// add event listener for on click of checkboxes

// add event listener for status checked for form inputs

var selected = [];
$('.check input[type="checkbox"]').each(function() {
    // if checkbox is checked
    if($(this).is('checked')) {
        selected.push($(this).attr('checked'));
    }
})

console.log(selected);


// event listener for next button
// update cards with selected array
$('#next').click(function(event) {
    event.preventDefault();
    console.log('button clicked');
    window.location.href='cardselectorPage.html';
});