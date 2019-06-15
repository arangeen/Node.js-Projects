// const square = function(x) {
//   return x * x;
// };

// recreate square function above using arrow-function syntax
// const square = x => {
//   return x * x;
// };

// // 3rd  version
// const square = x => x * x;

// console.log(square(5));

const event = {
  name: "Birthday Party",
  guestList: ["Ahmad", "Siaosi", "Bemi"],
  printGuestList() {
    console.log("Guest list for " + this.name);

    this.guestList.forEach(guest => {
      console.log(guest + " is attending " + this.name);
    });
  }
};

event.printGuestList();
