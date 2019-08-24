'use strict';

//This code returns a number of dog photos as specified by the viewer, with a limit of photos between 1 to 50. 
//Any more than that will return an error on the DOM requesting the user to enter in a number between 1-50. 

const index = (function () {
  function clearResults() {
    $('.results').empty();
  }

  //function to display results/printing to console
  function displayResults(responseJson) {
    clearResults();
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
      console.log(numOfDogPics);
      if (!numOfDogPics) {
        numOfDogPics = 3;
      }
      if (numOfDogPics <= 50 && numOfDogPics >= 1) {
        fetchDogImage(numOfDogPics);
      }
      else {
        clearResults();
        $('.error').html('Please enter a number between 1 to 50');
      }
    });
  }

  return {
    clearResults,
    displayResults,
    fetchDogImage,
    clickListener
  }
})();

index.clickListener();