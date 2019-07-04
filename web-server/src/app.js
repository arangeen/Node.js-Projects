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

// now start the server up
// port numeber 3000
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
