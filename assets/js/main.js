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


<<<<<<< HEAD
// "get started" button gets displayed first and when clicked, contents of food list will appear and button will hide untill refreshed"
=======
// add event listener for on click of checkboxes

// add event listener for status checked for form inputs

var selected = [];
$('#isChecked input[type="checkbox"]').each(function() {
    if($(this).is('checked')) {
        selected.push($(this).attr('checked'));
    }
})


 
// grab updated selected array

// update cards with array items
>>>>>>> e598f07fff277be2882c3072b4d786fbea96c407
welcomeButton.addEventListener('click', welcome)
    // when 'get started' buttons gets clicked, food options appear after
foodList.classList.add('hide');

function welcome() {
    console.log('ive been clicked')
    welcomeButton.classList.add('hide')
    foodList.classList.remove('hide')

}
