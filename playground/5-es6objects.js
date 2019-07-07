// Object property shorthand

const name = "Andrew";
const userAge = 28;

// const user = {
//   name: name,
//   age: userAge,
//   location: "Boston"
// };

//short hand syntax
const user = {
  name,
  age: userAge,
  location: "Boston"
};

console.log(user);

// Object destructuring
const product = {
  label: "Red Notebook",
  price: 3,
  stock: 201,
  salePrice: undefined
};

// const label = product.label
// const stock = product.stock

// to do it the destructuring way
//const { label, stock } = product;

//can also rename variables
//const { label: productLabel, stock } = product;

//can also ude destructuring to set default values
// const { label: productLabel, stock, rating = 5 } = product;

// console.log(productLabel);
// console.log(stock);

// creating a function that takes in that product obejct
// destructuring label and stock
const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock);
};

transaction("order", product);
