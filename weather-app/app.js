const request = require("request");

const url =
  "https://api.darksky.net/forecast/45c8fd671c3c1dbd4b83dcc55bc51803/37.8267,-122.4233";

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

/**
 * Goal: Handle Errors for geocoding request
 *    1. setup an error handler for low-level errors
 *    2. test by diabling network request and running the app
 *    3. setup error handling for no matching results
 *    4. test by altering search term and running the app
 */

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXJhbmdlZW4iLCJhIjoiY2p4MHpneXY4MDJldDRibm9ocHkxOGJmdyJ9.i4ZNm_xGY2TtV8VwwbuSlQ&limit=1";
request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location services!");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location. Try another search!");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }
});
