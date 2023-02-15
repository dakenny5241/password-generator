// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generate Password
function generatePassword() {
  //Prompts for user input
  var length = prompt("How many characters would you like your password to contain?");
  if (length < 8 || length > 128) {
    alert("Password length must be between 8-128 characters. Please try again.");
    return;
  }

  //Confirm user input
  var lowercase = confirm("Click OK to include lowercase characters.");
  var uppercase = confirm("Click OK to include uppercase characters.");
  var numeric = confirm("Click OK to include numeric characters.");
  var special = confirm("Click OK to include special characters.");

  //Validate user input
  if (lowercase === false && uppercase === false && numeric === false && special === false) {
    alert("You must select at least one character type. Please try again.");
    return;
  }

  //Create character string based on user input
  var charString = "";
  if (lowercase) {
    charString += "abcdefghijklmnopqrstuvwxyz";
  }
  if (uppercase) {
    charString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numeric) {
    charString += "0123456789";
  }
  if (special) {
    charString += "!@#$%^&*()_+-=[]{}|;':,./<>?";
  }

  //Generate password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomChar = charString[Math.floor(Math.random() * charString.length)];
    password += randomChar;
  }

  return password;
}