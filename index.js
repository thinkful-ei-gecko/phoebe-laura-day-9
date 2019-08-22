'use strict';
let numOfDogPics;

//function to display results/printing to console
function displayResults(responseJson) {
  console.log(responseJson.message);
}

//function to GET the images
function fetchDogImage() {
  fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogPics}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

//listener on the submit button 
function clickListener() {
  $('form').submit(event => {
    event.preventDefault();
    numOfDogPics = $('#number-input').val();
    fetchDogImage();
  });
}

$(clickListener);