const request = require("request");

const url =
  "https://api.darksky.net/forecast/45c8fd671c3c1dbd4b83dcc55bc51803/37.8267,-122.4233";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.currently);
});
