// dont need to install it because it is a core module provided by nodejs
const path = require("path");

//load in express, configure it to serve something up and start server
const express = require("express");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
// a way to customize server to serve up the folder we want
app.use(express.static(publicDirectoryPath));

//Goal: Create two more HtML  files
//  - about page and help page

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
