const fs = require("fs");

// const book = {
//   title: "Harry Pother",
//   author: "Ahmad Rangeen"
// };

// const bookJSON = JSON.stringify(book);

// saving the json data inside that file. created by itself if it doesnt exist
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data.title);

/**
 * Challenge: Work with JSON and the file system
 *
 *  1. Load and parse JSON data
 *  2. Change the name and age property using your info
 *  3. Stringify the changed object and override the original data
 *  4. test work by viewing data in the JSON file
 */

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = "Ahmad";
user.age = 54;

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
