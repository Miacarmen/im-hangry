console.log("this is the results page")
//
// fetch request
// concatenate choice from wheel page into the targetURL

var apiKey = 'AIzaSyA6xeHz0LvbZvjRV2pp1eA00sbEjms-b1M'
var targetURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=AIzaSyA6xeHz0LvbZvjRV2pp1eA00sbEjms-b1M&input=restaurant&inputtype=textquery&fields=name&locationbias=ipbias"
console.log(targetURL)
fetch(targetURL,{
})
  .then((resp)=>{
    console.log(resp)
    return resp.json()
  })
  .then(data => console.log(data))

//

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
