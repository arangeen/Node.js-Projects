console.log("Client side javascript side is loaded");

/**
 * Goal: Fetch Weather!
 *  1. setup a call to fetch to fetch weather form Boston
 *  2. Get the parse JSON response
 *      - if no errror property, print location and forecast to console
 *  3. Refresh browser and test work
 */

fetch("http://localhost:3000/weather?address=Boston").then(response => {
  response.json().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.location);
      console.log(data.forecast);
    }
  });
});

// explored the fetch api,
