//Exercise 1
let lightBulbStatus = "On";
let message;

// Start coding here.
function lightBulb() {
  if (lightBulbStatus === "On") {
    message = "Light bulb is On.";
  } else if (lightBulbStatus === "Off") {
    message = "Light bulb is Off.";
  } else {
  }
}
lightBulb(lightBulbStatus);
console.log(message);
