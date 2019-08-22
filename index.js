'use strict';

//function to display results/printing to console
function displayResults(responseJson) {
  console.log(responseJson.message);
  $('.results').empty();
  responseJson.message.forEach(img => {
    $('.results').append(`<img src='${img}'>`);
  });
}
//function to GET the images
function fetchDogImage(numOfDogPics) {
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
    let numOfDogPics = $('#number-input').val();
    if (!numOfDogPics) {
      numOfDogPics = 3;
    }
    fetchDogImage(numOfDogPics);
  });
}

$(clickListener);