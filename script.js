// Assignment code here
var lowerRandom = function() {
  lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
  var lowerLetter = lowerAlphabet[Math.floor(Math.random()*lowerAlphabet.length)];
  return lowerLetter;
} 
var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specChars = "!@#$%&*"

var passwordLengthPrompt = function() {
  var passLength = parseInt(window.prompt("Select password length. Enter a number between '8' and '128'."), 10);
  if (!passLength || passLength < 8 || passLength > 128) {
    alert("Invalid entry. Please try again.");
    passwordLengthPrompt();
  } else {
    return passLength;
  }
}



function generatePassword() {
  //Prompt user for password length
  var passwordLength = passwordLengthPrompt();
  
  //Prompt user for password criteria
  var lowerCase = window.confirm("Would you like to include lower case letters in your password?");
  var upperCase = window.confirm("Would you like to include upper case letters in your password?");
  var numerics = window.confirm("Would you like to include numbers in your password?");
  var specialChars = window.confirm("Would you like to include special characters in your password?");
  var pass = "";
  if (lowerCase && upperCase === false && numerics === false && specialChars === false) {
    for (var i = 0; i < passwordLength; i++) {
      var pass = pass + lowerRandom();
      console.log(pass);
    }
    return pass;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
