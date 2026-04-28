//Template literal

const name = "John";
const age = 30;

console.log(`My name is ${name} and I am ${age} years old.`);

//Strings

const str1 = " Hello I am Abinaya.. how are you? ";
console.log(str1.length); // Length of the string
console.log(str1.trim()); // Remove whitespace from both ends
console.log(str1.toUpperCase()); // Convert to uppercase
console.log(str1.toLowerCase());
console.log(str1.includes("Abinaya")); // Check if the string includes "Abinaya"
console.log(str1.split(" ")); // Split the string into an array of words
console.log(str1.replace("Abinaya", "John")); // Replace "Abinaya" with "John"
console.log(str1.indexOf("Abinaya")); // Get the index of "Abinaya"
console.log(str1.slice(0, 5)); // Get a substring from index 0 to 5
console.log(str1.charAt(0)); // Get the character at index 0
console.log(str1.substring(2,4)); // Get a substring from index 2 to 4
console.log(str1.startsWith(" Hello")); // Check if the string starts with " Hello"
console.log(str1.endsWith("you? ")); // Check if the string ends with "you? "
console.log(str1.substr(7, 5)); // Get a substring from index 7 with length 5