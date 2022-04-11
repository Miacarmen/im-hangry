console.log("script is linked")
var APIkey = ""
var targetURL = "https://api.spoonacular.com/recipes/complexSearch?cuisine=indian&apiKey=446369fd8c0b4e3eb39992c76f883a83"
fetch(targetURL)
    .then(function(response) {
        console.log(response)
        return response.json()
    })
    .then(data => console.log(data))



// select types of cuisines

// update wheel with selections

// spin the wheel on click of start button
// randomly stop

// pulls recipies for selected cuisine using API
// user selects receipe, list of ingredients displayed

// make button to display grocery stores to buy ingredients
// fetches google maps API