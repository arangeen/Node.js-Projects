const request = require("request");

const url =
  "https://api.darksky.net/forecast/45c8fd671c3c1dbd4b83dcc55bc51803/37.8267,-122.4233";

// setting json to true is saying we would like a request to parse this as json
request({ url: url, json: true }, (error, response) => {
  // console.log(response.body.currently);
  console.log(
    "The temperature outside is currently " +
      response.body.currently.temperature +
      " degrees out. There us a " +
      response.body.currently.precipProbability +
      "% chance of rain."
  );
});

/**
 * Goal: Print a small forecast to the user
 *
 *  1. Print: "The temperature outside is currently 58.55 degrees out. There is a 0% chance of rain"
 */
