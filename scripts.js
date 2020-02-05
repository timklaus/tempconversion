var unit1 = prompt("What Temperature unit are we converting today?");
var unit1uc = unit1.toUpperCase();
console.log(unit1uc);

if (unit1uc.charAt(0) === "F") {
	var temp = parseFloat(prompt("Enter the temperature you'd like to convert to Celsius:"));
  var result = (temp - 32) * (5 / 9);
  var char = "C";
  }
else if (unit1uc.charAt(0) === "C") {
	var temp = parseFloat(prompt("Enter the temperature you'd like to convert to Fahrenheit"));
  var result = (temp * (9 / 5)) + 32;
  var char = "F";
}
else alert("Pick Fahrenheit of Celsius for now, please. I'm not a god.");

alert(result + " degrees " + char)