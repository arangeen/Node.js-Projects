// dont need to install it because it is a core module provided by nodejs
const path = require("path");

//load in express, configure it to serve something up and start server
const express = require("express");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");

// getting handlebars set up
app.set("view engine", "hbs");

// a way to customize server to serve up the folder we want
app.use(express.static(publicDirectoryPath));

// setting up route to use index.hbs
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Ahmad Rangeen"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Ahmad Rangeen"
  });
});

/**
 * Goal: Create a template for help page
 *  1. setup a help template to render a help message to the screen
 *  2. Setup a help route and render the template with an example message
 *  3. Visit the route in the browser and see help message
 */
app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text."
  });
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
