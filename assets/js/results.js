console.log("this is the results page")

var restBut = $('#rest')
var reciBut = $('#reci')

var row1 = $('#row1')
var row2 = $('#row2')

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
  lon = crd.longitude
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  saveLatLon(lat, lon)
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
navigator.geolocation.getCurrentPosition(success, error, options);

//waits for geoLocation to be success
function saveLatLon(x, y) {
  lat = x
  lon = y
  console.log(lat)
  console.log(lon)
}

// event listeners
restBut.on('click', function() {
  taFetch(lat, lon)

})

reciBut.on('click', function() {
  spoonFetch()
})

function spoonFetch() {
  var targetURL = "https://api.spoonacular.com/recipes/complexSearch?cuisine=indian&addRecipeInformation=true&apiKey=446369fd8c0b4e3eb39992c76f883a83"
  fetch(targetURL)
    .then(function(response) {
      console.log(response)
      return response.json()
    })
    .then(function(data) {
      console.log(data)
      displayRecipeInfo(data)
      // localStorage.setItem('reciResp', JSON.stringify(data))
    })
}
var reciResp = JSON.parse(localStorage.getItem('reciResp'))
// displayRecipeInfo(reciResp)

function displayRecipeInfo(obj) {
  row1.empty()
  row2.empty()
  for (let i = 0; i < 3; i++) {
    var newContainer = $('<div>').addClass("col s12 l4")
    var newCard = $('<div>').addClass('card light-grey') 
    var newContent = $('<div>').addClass('card-content white-text')
    // var newTitle = $('<span>').addClass('card-title dark-grey-text')
    // newTitle.text(obj.results[i].title)
    var newImgHolder = $('<div>').addClass('card-image')
    var newPic = $('<img>').attr('src', obj.results[i].image)
    var newLink = $('<a>').attr('href', obj.results[i].sourceUrl)
    newLink.text(obj.results[i].title)

    // newLink.append(newTitle)
    newContent.append(newLink)
    newCard.append(newImgHolder)
    newCard.append(newContent)
    newImgHolder.append(newPic)
    newContainer.append(newCard)
    row1.append(newContainer)
  }

  for (let i = 3; i < 6; i++) {
    var newContainer = $('<div>').addClass("col s12 l4")
    var newCard = $('<div>').addClass('card light-grey')
    var newContent = $('<div>').addClass('card-content white-text')
    // var newTitle = $('<span>').addClass('card-title dark-grey-text')
    // newTitle.text(obj.results[i].title)
    var newImgHolder = $('<div>').addClass('card-image')
    var newPic = $('<img>').attr('src', obj.results[i].image)
    var newLink = $('<a>').attr('href', obj.results[i].sourceUrl)
    newLink.text(obj.results[i].title)

    // newLink.append(newTitle)
    newContent.append(newLink)
    newCard.append(newImgHolder)
    newCard.append(newContent)
    newImgHolder.append(newPic)
    newContainer.append(newCard)
    row2.append(newContainer)
  }
}

function taFetch(x, y) {
  const opts = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      'X-RapidAPI-Key': '644883e55amsh23c137fe60742eep16527bjsne5d9552c9387'
    }
  };

  var fetchURL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=' + x + '&longitude=' + y + '&limit=30&currency=USD&distance=2&open_now=false&lunit=km&lang=en_US'
  fetch(fetchURL, opts)
    .then(response => response.json())
    .then(function(data) {
      console.log(data)
      displayRestaurantInfo(data)
      // localStorage.setItem('restResp', JSON.stringify(data))
    })
    .catch(err => console.error(err));

}
// var restResp = JSON.parse(localStorage.getItem('restResp'))
// console.log(restResp)
// displayRestaurantInfo(restResp)
function displayRestaurantInfo(obj) {
  row1.empty()
  row2.empty()
  for (let i = 0; i < 3; i++) {
    var newContainer = $('<div>').addClass("col s12 l4")
    var newCard = $('<div>').addClass('card light-grey') 
    var newContent = $('<div>').addClass('card-content black-text center-align')
    var newLink = $('<a>').attr('href', obj.data[i].web_url)
    newLink.attr('target','_blank')
    newLink.text(obj.data[i].name)

    newContent.append(newLink)
    newCard.append(newContent)
    newContainer.append(newCard)
    row1.append(newContainer)
  }

  for (let i = 3; i < 6; i++) {
    var newContainer = $('<div>').addClass("col s12 l4")
    var newCard = $('<div>').addClass('card light-grey') 
    var newContent = $('<div>').addClass('card-content black-text center-align')
    var newLink = $('<a>').attr('href', obj.data[i].web_url)
    newLink.attr('target','_blank')
    newLink.text(obj.data[i].name)

    newContent.append(newLink)
    newCard.append(newContent)
    newContainer.append(newCard)
    row2.append(newContainer)
  }
}

