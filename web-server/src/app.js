// dont need to install it because it is a core module provided by nodejs
const path = require("path");
//load in express, configure it to serve something up and start server
const express = require("express");

// need this for partials
const hbs = require("hbs");

const app = express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");

const partialsPath = path.join(__dirname, "../templates/partials");

// Setting up handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setting up static directory to serve
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

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text.",
    title: "Help",
    name: "Ahmad Rangeen"
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is sunny",
    location: "California"
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Ahmad Rangeen",
    errorMessage: "Help article not found."
  });
});

// * means match anything that hasnt been matched so far
// render 404 page
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Ahmad Rangeen",
    errorMessage: "Page not found"
  });
});

/**
 * Goal: Create and render a 404 page with handlebars
 *  1. Setup the template to render the header and footer
 *  2. Setup the template to render an error message in a paragraph
 *  3. Render the template for both 404 routes
 *      - page not found.
 *      -help article not found.
 *  4. Test work. visit /what and /help/units
 */

// now start the server up
// port numeber 3000
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
