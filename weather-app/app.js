const request = require("request");
const geocode = require("./utils/geocode.js");

// const url =
//   "https://api.darksky.net/forecast/45c8fd671c3c1dbd4b83dcc55bc51803/37.8267,-122.4233";

// // setting json to true is saying we would like a request to parse this as json
// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find Location.");
//   } else {
//     console.log(
//       response.body.daily.data[0].summary +
//         " The temperature outside is currently " +
//         response.body.currently.temperature +
//         " degrees out. There us a " +
//         response.body.currently.precipProbability +
//         "% chance of rain."
//     );
//   }
// });

//Geocoding
// Address -> Lat/Lang -> Weather

geocode("Philadelphia", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
