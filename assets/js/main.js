console.log('script is linked');

var foodList = $('#list');
var welcomeButton = $('#welcomebtn');
var nextButton = $('#next');


welcomeButton.click(function(event) {
    // event.preventDefault();
    console.log('button clicked');
    welcomeButton.hide();
    foodList.show();
    nextButton.show();
});




// array to be populated with selected choices
var selected = [];
// event listener for next button
nextButton.click(function(event) {
    event.preventDefault();
    console.log('button clicked');
    // get status of selected checkboxes
    $('.check').each(function() {
        // if checkbox is checked
        console.log(this.checked);
        if (this.checked) {
            console.log($(this).val());
            // push selected boxes to array
            selected.push($(this).val());
            
        }
    })
    console.log(selected);
    window.location.href='cardselectorPage.html';
});

// add to local storage



// on click of next button
// update cards with list of selected foods

// hide list screen
// display card screen

// CARDSELECTOR.js HERE

// on click of random card
// pull api 
