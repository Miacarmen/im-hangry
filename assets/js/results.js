console.log("this is the results page")

// fetch request
// concatenate choice from wheel page into the targetURL

var apiKey = 'AIzaSyA6xeHz0LvbZvjRV2pp1eA00sbEjms-b1M'
var targetURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=restaurant&inputtype=textquery&key=" +apiKey
console.log(targetURL)
    fetch(targetURL)
    .then(response => response.json())
    .then(data => console.log(data));
