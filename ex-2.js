//Exercise 2
let lightBulbStatus = "On";
let message;

// Start coding here.
function lightBulb() {
  if (lightBulbStatus === "On") {
    message = "Light bulb is On.";
  } else if (lightBulbStatus === "Off") {
    message = "Light bulb is Off.";
  } else if (lightBulbStatus === "Broken") {
    message = "Light bulb is broken.";
  } else {
    message = "Please correct input (On/Off/Broken)";
  }
}
lightBulb(lightBulbStatus);
console.log(message);
