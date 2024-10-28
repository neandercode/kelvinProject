//variable for kelvin
var kelvin = 293;

//converts from kelvin to celcius
var celcius = kelvin - 273;

//uses funny numbers to convert to fahrenheit
var fahrenheit = Math.floor(celcius * (9 / 5) + 32);

console.log(`The temperature is ` + fahrenheit + ` degrees Fahrenheit`);
