//load in express, configure it to serve something up and start server
const express = require("express");
const app = express();

// req is short for request, res is short for response
// sending back html data to the browser
app.get("", (req, res) => {
  res.send("<h1> Weather</h1>");
});

// send back json object
app.get("/help", (req, res) => {
  res.send([
    {
      name: "Ahmad",
      age: 25
    },
    {
      name: "Bemi",
      age: 26
    }
  ]);
});

/**Goal: Updata routes
 *  1. Setup about route to render a title with html
 *  2. Setup a weather route to send back json
 *      - Object with forecast and location strings
 *  3. Test your work
 */

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is sunny",
    location: "California"
  });
});

// now start the server up
// port numeber 3000
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});

// to view page, go to chrome and search 'localhost:3000'
