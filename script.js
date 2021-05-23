// random lower case function
var lowerRandom = function() {
  lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
  var lowerLetter = lowerAlphabet[Math.floor(Math.random()*lowerAlphabet.length)];
  return lowerLetter;
} 

//random upper case function
var upperRandom = function() {
  var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var upperLetter = upperAlphabet[Math.floor(Math.random()*upperAlphabet.length)];
  return upperLetter;
}

//random special character function
var specialRandom = function() {
  var specChars = "!@#$%&"
  var specChars = specChars[Math.floor(Math.random()*specChars.length)];
  return specChars;
}

//random number between 0 and 9 function
var numberRandom = function() {
  return Math.floor(Math.random()*10);
}



var passwordLengthPrompt = function() {
  var passLength = parseInt(window.prompt("Select password length. Enter a number between '8' and '128'."), 10);
  if (!passLength || passLength < 8 || passLength > 128) {
    alert("Invalid entry. Please try again.");
    passwordLengthPrompt();
  } else {
    return passLength;
  }
}

var charTypes = [false, false, false, false];
var charTypesPrompt = function() {

    //Prompt user for password criteria
    var lowerCase = window.confirm("Would you like to include lower case letters in your password?");
    charTypes[0] = lowerCase;
    var upperCase = window.confirm("Would you like to include upper case letters in your password?");
    charTypes[1] = upperCase;
    var numerics = window.confirm("Would you like to include numbers in your password?");
    charTypes[2] = numerics;
    var specialChars = window.confirm("Would you like to include special characters in your password?");
    charTypes[3] = specialChars;

    console.log(charTypes);

    if (charTypes[0] === false && charTypes[1] === false && charTypes[2] === false && charTypes[3] === false) {
      alert("Minimum of 1 character type must be selected. Please try again.")
      charTypesPrompt();
    } else {
      return charTypes;
    }

}


//generate password function
function generatePassword() {
  //Prompt user for password length and validate answer
  var passwordLength = passwordLengthPrompt();
  
  //Prompt user for passwords and validate answer
  var passCriteria = charTypesPrompt();

  var pass = "";

  //if only lower case letters are wanted in password
  if (passCriteria[0] === true && passCriteria[1] === false && passCriteria[2] === false && passCriteria[3] === false) {
    for (var i = 0; i < passwordLength; i++) {
      pass = pass + lowerRandom();
      console.log(pass);
    }
    return pass;
  }

  //if upper and lower case letters are wanted in password
  if (passCriteria[0] === true && passCriteria[1] === true && passCriteria[2] === false && passCriteria[3] === false) {
    for (var i = 0; i < passwordLength; i++) {
      if (Math.random() > 0.5) {
        pass = pass + lowerRandom();
      } else {
        pass = pass + upperRandom();
      }
      console.log(pass);
    }
    return pass;
  }
  //if upper, lower, and numbers are wanted in password
  if (passCriteria[0] === true && passCriteria[1] === true && passCriteria[2] === true && passCriteria[3] === false) {
    for (var i = 0; i < passwordLength; i++) {
      var randomChar = Math.random();
      if (randomChar >= 0.6) {
        pass = pass + lowerRandom();
      } else if (randomChar > 0.3 && randomChar < 0.6) {
        pass = pass + upperRandom();
      } else {
        pass = pass + numberRandom();
      }
      console.log(pass);
    }
    return pass;
  }
  //if all types of characters are wanted in password
  if (passCriteria[0] === true && passCriteria[1] === true && passCriteria[2] === true && passCriteria[3] === true) {
    for (var i = 0; i < passwordLength; i++) {
      var randomChar = Math.random();
      if (randomChar >= 0.75) {
        pass = pass + lowerRandom();
      } else if (randomChar >= 0.5 && randomChar < 0.75) {
        pass = pass + upperRandom();
      } else if(randomChar >= 0.25 && randomChar <0.5) {
        pass = pass + numberRandom();
      } else {
        pass = pass + specialRandom();
      }
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
