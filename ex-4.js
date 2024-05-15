//Exercise 4
// Switch Statement
let lightBulbStatus = "On";
let message;

//Start coding here
function lightBulb() {
  switch (lightBulbStatus) {
    case "On":
      message = "Light bulb is On.";
      break;
    case "Off":
      message = "Light bulb is Off.";
      break;
    case "Broken":
      message = "Light bulb is broken.";
      break;
    default:
      message = "Please correct input (On/Off/Broken)";
  }
}

lightBulb(lightBulbStatus);
console.log(message);
