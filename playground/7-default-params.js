const greeter = (name = "User", age) => {
  console.log("Hello " + name);
};

// should see Hello Andrew printed to console
greeter("Andrew");

// should see Hello Uesr printed to console
greeter();
