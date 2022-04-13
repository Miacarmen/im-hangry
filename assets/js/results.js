console.log("this is the results page")

// fetch request
// concatenate choice from wheel page into the targetURL

var apiKey = 'AIzaSyA6xeHz0LvbZvjRV2pp1eA00sbEjms-b1M'
var targetURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=AIzaSyA6xeHz0LvbZvjRV2pp1eA00sbEjms-b1M&input=restaurant&inputtype=textquery&fields=name"
console.log(targetURL)
fetch(targetURL)
  .then((resp)=>{
    return resp.json();
  })
  .then(data => console.log(data))

