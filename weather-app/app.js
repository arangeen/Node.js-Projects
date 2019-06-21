const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

//Geocoding
// Address -> Lat/Lang -> Weather

geocode("Boston", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
  //callback chaining: chaining together multiple callbacks to do mulitiple things in a specific order
  forecast(data.latitude, data.longitude, (error, data) => {
    console.log("Error", error);
    console.log("Data", data);
  });
});
