console.log("script is linked")
var APIkey= ""
var targetURL= "https://api.spoonacular.com/recipes/complexSearch?cuisine=indian&apiKey=446369fd8c0b4e3eb39992c76f883a83" 
fetch(targetURL)
    .then(function(response) {
      console.log(response)
      return response.json()
    }) 
    .then(data => console.log(data))
