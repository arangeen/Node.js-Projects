const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

/**
 * Goal: Use both destructuring and property shorthand in weather app
 *  1. use desturturing in app.js, forecast.js, and geocode.js
 *  2. use property shorthand in forecast.js and geocode.js
 *  3. test work
 */

const address = process.argv[2];

if (!address) {
  console.log("Please provide an address ");
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error);
    }

    //callback chaining: chaining together multiple callbacks to do mulitiple things in a specific order
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      //print location and forecast data here
      console.log(location);
      console.log(forecastData);
    });
  });
}

// this can show you why its argv[2] for address above
//console.log(process.argv);
