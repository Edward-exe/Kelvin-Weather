// the temperature is 293 kelvin and this will stay constant
const kelvin =  300;
/*celsius is 273 degrees less than kelvin so to get it we minus 273 from the kelvin number*/
const celsius = kelvin - 273;
// to find fahrenheit me must times celsius by (9/5) then add 32
let fahrenheit = celsius *(9/5) + 32;
/*celsius to fahrenheit often provides a decimal number the .floor method rounds down to the nearest full number*/
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// to find newton we times celsius by (33/100)
const newton = celsius *(33/100);
console.log(`The temperature is ${newton} degrees Newton.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);