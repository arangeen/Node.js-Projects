console.log("Client side javascript side is loaded");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

// first argument is name of event we want to listen to
// funtion will run everytime form is submitted
weatherForm.addEventListener("submit", event => {
  // browser wont refresh eveytime you submit the form
  event.preventDefault();

  const location = search.value;

  fetch("http://localhost:3000/weather?address=" + location).then(response => {
    response.json().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data.location);
        console.log(data.forecast);
      }
    });
  });
});

/**
 * Goal: use input value to get weather
 *  1. migrate fetch call into the submit callback
 *  2. Use the search text as address query string value
 *  3. Submit the form with a valid and incalid value test
 */
