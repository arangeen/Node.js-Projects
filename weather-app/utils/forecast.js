const request = require("request");

const forecast = (latitude, longitude, callbackfunction) => {
  const url =
    "https://api.darksky.net/forecast/45c8fd671c3c1dbd4b83dcc55bc51803/" +
    latitude +
    " , " +
    longitude;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callbackfunction("Unable to connect to weather service", undefined);
    } else if (response.body.error) {
      callbackfunction("Unable to find location", undefined);
    } else {
      callbackfunction(
        undefined,
        response.body.daily.data[0].summary +
          " The temperature outside is currently " +
          response.body.currently.temperature +
          " degrees out. There us a " +
          response.body.currently.precipProbability +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
