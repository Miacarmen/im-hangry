console.log("this is the results page")
//
// fetch request
// concatenate choice from wheel page into the targetURL

// var apiKey = 'AIzaSyA6xeHz0LvbZvjRV2pp1eA00sbEjms-b1M'
var targetURL = "https://api.yelp.com/v3/businesses/search?term=restaurant&latitude=37.801&longitude=-122.248"
console.log(targetURL)
fetch(targetURL,{
  headers: {
    Authorization: "Bearer WyBp2EU9JSQ3n3pwgEarLQBKL0nJ92Kjsgqztt2cXzEYhZ6QM-PIIz0O0twiqjJ9QY_KXTQg9zRaFQEmo9r_YZ-bIyuolT6c02juqO8iNzOwUo8Klb9zkAHE53RXYnYx",
    
  }
})
  .then((resp)=>{
    console.log(resp)
    return resp.json()
  })
  .then(data => console.log(data))

//
// var axios = require('axios');
//
// var config = {
//   method: 'get',
//   url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY',
//   headers: { }
// };
//
// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

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
  console.log(lat)
  console.log(lon)
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

