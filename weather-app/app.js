const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Please provide an address ");
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log(error);
    }

    //callback chaining: chaining together multiple callbacks to do mulitiple things in a specific order
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      //print location and forecast data here
      console.log(data.location);
      console.log(forecastData);
    });
  });
}

// this can show you why its argv[2] for address above
console.log(process.argv);

/**
 * Goal: Accept location via command line argument
 * ** example run:
 *          $ node app.js "New York" *****
 *
 *  1. access the command line argument without yargs
 *  2. use the string value as the input for geocode
 *  3. only geocode if a location was provided
 *  4. Test you work with a couple locations
 */
