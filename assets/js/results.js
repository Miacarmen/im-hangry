console.log("this is the results page")

var restBut = $('#rest')
var reciBut = $('#reci') 

//geoLocation to get latLon of user
var lat = ''
var lon = ''

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  lat = crd.latitude
  lon= crd.longitude
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  saveLatLon(lat,lon)
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
navigator.geolocation.getCurrentPosition(success, error, options);

//waits for geoLocation to be success
function saveLatLon(x,y){
  lat = x
  lon = y
  console.log(lat)
  console.log(lon)
}

// event listeners
restBut.on('click', function(){
  taFetch(lat,lon)
})

reciBut.on('click', function(){
  spoonFetch()
})

function spoonFetch(){
var targetURL = "https://api.spoonacular.com/recipes/complexSearch?cuisine=indian&apiKey=446369fd8c0b4e3eb39992c76f883a83"
fetch(targetURL)
    .then(function(response) {
        console.log(response)
        return response.json()
    })
    .then(data => console.log(data))
}



function taFetch(x,y){
const opts = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
		'X-RapidAPI-Key': '644883e55amsh23c137fe60742eep16527bjsne5d9552c9387'
	}
};

  var fetchURL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude='+x+'&longitude='+y+'&limit=30&currency=USD&distance=2&open_now=false&lunit=km&lang=en_US'

fetch(fetchURL, opts)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

}

