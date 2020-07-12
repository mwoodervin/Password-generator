// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assign variable to hold information from prompts and confirms.

// Assign variables for the charachters that might be used and
// the string of possible characters that will be used by random
// selector.


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

  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCharacters = "0123456789";
  var specialCharacters = "\"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var charactersToUse = [];
  var finalPassword = "";


  var pwTotal = parseInt(prompt("Enter password length here. Password must be between 8 and 128 characters."));
  
  // check password length
  if(pwTotal<8 || pwTotal>128) {
  alert("Please enter a number between 8 and 128.");
  generatePassword();
  return;
  }
  
  var useLowerCase = confirm("Do you want to include lower case letters?");
  var useUpperCase = confirm("Do you want to include upper case letters?");
  var useNum = confirm("Do you want to include numeric values?");
  var useSpecialCharacters = confirm("Do you want to include special characters?");

if(useLowerCase) {
  charactersToUse.push(lowerCase);
}

if(useUpperCase) {
  charactersToUse.push(upperCase);
}

if(useNum) {
  charactersToUse.push(numberCharacters);
}  

if(useSpecialCharacters) {
  charactersToUse.push(specialCharacters);

}


if (!useSpecialCharacters && !useNum && !useUpperCase && !useLowerCase) {
  alert("You must choose at least one type of character to include in order to create a password. Please try again.");
  generatePassword();
  return;
}


for(var index = 0; index < pwTotal; index++) {

  var randomCharactersToUse = Math.floor(Math.random()) * pwTotal;
  var randomCharacter = Math.floor(Math.random() * charactersToUse[randomCharactersToUse].length);
  
  finalPassword += charactersToUse[randomCharactersToUse][randomCharacter];
  }

  console.log(randomCharactersToUse);
  console.log(charactersToUse);
  console.log(finalPassword);

  return finalPassword;
}