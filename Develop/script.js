// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assign variable to hold information from prompts and confirms.

// Assign variables for the charachters that might be used and
// the string of possible characters that will be used by random
// selector.
var possibleChar = "";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "0123456789";
var specialChar = "\"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var password1 = "";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write your code below

function generatePassword(){
  var password1 = "";
  var pwTotal = "";
  var pwTotal = prompt("Enter password length here. Password must be between 8 and 128 characters.")
  
  // check password length
  if(pwTotal<8 || pwTotal>128) {
  alert("Please enter a number between 8 and 128.");
  generatePassword();
  return;
  }
  
  var ifLowerCase = confirm("Do you want to include lower case letters?");
  var ifUpperCase = confirm("Do you want to include upper case letters?");
  var ifNum = confirm("Do you want to include numeric values?");
  var ifSpecialChar = confirm("Do you want to include special characters?");

if(ifLowerCase) {
  possibleChar = possibleChar.concat(lowerCase);
}

if(ifUpperCase) {
  possibleChar = possibleChar.concat(upperCase);
}

if(ifNum) {
  possibleChar = possibleChar.concat(numChar);
}  

if(ifSpecialChar) {
  possibleChar = possibleChar.concat(specialChar);

}

console.log(possibleChar);

if (!ifSpecialChar && !ifNum && !ifUpperCase && !ifLowerCase) {
  alert("You must choose at least one type of character to include in order to create a password. Please try again.");
  return;
}

// With some help from https://stackoverflow.com/questions/1497481/javascript-password-generator
// and some research about strings on W3Schools

for(i=0, n=possibleChar.length; i<pwTotal; i++) {
  password1 += possibleChar.charAt(Math.floor(Math.random() * n))
  }

  return(password1);
}