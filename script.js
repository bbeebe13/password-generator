// Assignment code here
var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specChars = "!@#$%&*"

var passwordLength = function() {
  var passLength = window.prompt("Select password length. Enter a number between '8' and '128'.");
  if (!passLength || passLength < 8 || passLength > 128) {
    alert("Invalid entry. Please try again.");
    passwordLength();
  } else {
    return passLength;
  }
}



function generatePassword() {
  //Prompt user for password length
  passwordLength();
  
  //Prompt user for password criteria
  var lowerCase = window.confirm("Would you like to include lower case letters in your password?");
  var upperCase = window.confirm("Would you like to include upper case letters in your password?");
  var numerics = window.confirm("Would you like to include numbers in your password?");
  var specialChars = window.confirm("Would you like to include special characters in your password?");

  for (var i = 0; i < passwordLength; i++) {

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
