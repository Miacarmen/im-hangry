console.log("script is linked")
var APIkey= "ji7UgLdXj64gawmgGwYoJLuGvWgH24bY1xT-BpCuV0w9g9C02Gi-ZIb0UxKlZfUINNfDYwa5xUS8CMyUSNf5vYs0Eb2D0oa4c6Ol-t259DzWuIZ7RcDH32Dws4NUYnYx"
var targetURL= "https://api.yelp.com/v3/businesses/search?" +APIkey;
fetch(targetURL)
    .then(response => response.json(),console.log(response))
    
    .then(data => console.log(data));