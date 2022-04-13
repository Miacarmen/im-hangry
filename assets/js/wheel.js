console.log("this is the wheel page")


// add event listener for status checked for form inputs


// select types of cuisines
// when selected update status to active or not active
// cuisines.length = 39
let cuisines = [
    'Mexican',
    'Burritos',
    'Tacos',
    'Italian',
    'Pasta',
    'Pizza',
    'French',
    'Indian',
    'Middle Eastern',
    'Moroccan',
    'Persian',
    'Seafood',
    'Mediterranean',
    'Greek',
    'Ethiopian',
    'Caribbean',
    'Hawaiian',
    'Filipino',
    'Brazilian',
    'Argentinian',
    'Korean',
    'Korean BBQ',
    'Thai',
    'Vietnamese',
    'Taiwanese',
    'Lebanese',
    'Chinese',
    'Japanese',
    'Sushi',
    'Ramen',
    'Pho',
    'Soup',
    'American',
    'BBQ',
    'Burgers',
    'Sandwiches',
    'Salad',
    'Vegan',
    'Vegetarian'
];


// create new array based on selections



// container function for all functions
// immediately invoked
// needed to not polute global scope
(function() {



    // Function to create wheel
    var createWheel = function() {
        // grab wheel from html
        const wheel = document.querySelector('.wheel');
        const spinButton = document.querySelector('#spinBtn');


        // spin button event listener
        // event listen for when spin stops
        spinButton.addEventListener('click', function() {

        });
        // grab array of selected cuisines

        // update wheel segments with selections
        // update checked status data attribute for each form input
        wheel.addEventListener('', function() {

        });

        // degree of rotation
        degOfRotation = function() {
            // degree of spin 
            var degree = 0;
            var degreeOfSpin = 360;
        };

    }


    var spinWheel = function() {


            // spinButton.addEventListener(function() {});
        }
        // spin the wheel on click of start button
        // spin button event listener 
        // update degree of rotation 
        // rotate the wheel
        // add blur while rotating?

    // randomly stop
    // fisher-yates
    // Math.random(Math.floor()) to randomly stop
    var randomize = function() {

    }


    // function to display selected food
    // overlay, food name, icon, button to see recipes


    // reset wheel to starting position
    var wheelReset = function() {

    };


})();

// closing brackets for container function



// pulls recipies for selected cuisine using API
// user selects receipe, list of ingredients displayed

// make button to display grocery stores to buy ingredients
// fetches google maps API