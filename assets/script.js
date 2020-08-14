let generateBtn = document.querySelector("#generate");

// Assign variables for the charachters that might be used and
// the string of possible characters that will be used by random selector.
let possibleChar = "";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numChar = "0123456789";
let specialChar = "\"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let password1 = "";

// EVENT LISTENER
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Write your code below

function generatePassword(){
  let possibleChar = "";
  let password1 = "";
  let pwTotal = "";
  pwTotal = prompt("Enter password length here. Password must be between 8 and 128 characters.")
  
  // check password length
  if(pwTotal<8 || pwTotal>128) {
  alert("Please enter a number between 8 and 128.");
  generatePassword();
  return;
  }
  
  let ifLowerCase = confirm("Do you want to include lower case letters?");
  let ifUpperCase = confirm("Do you want to include upper case letters?");
  let ifNum = confirm("Do you want to include numeric values?");
  let ifSpecialChar = confirm("Do you want to include special characters?");

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