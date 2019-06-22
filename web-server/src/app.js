//load in express, configure it to serve something up and start server

const express = require("express");
const app = express();

// ex. app.com , app.com/help , app.com/about

// req is short for request, res is short for response
app.get("", (req, res) => {
  res.send("Hello Express!");
});

app.get("/help", (req, res) => {
  res.send("Help Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/weather", (req, res) => {
  res.send("Weather Page");
});

/**
 * Goal: Setup two new routes
 *  1. Setup an about route and render a page title
 *  2. weather route and render page title
 *  3. test
 */

// now start the server up
// port numeber 3000
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});

// to view page, go to chrome and search 'localhost:3000'
