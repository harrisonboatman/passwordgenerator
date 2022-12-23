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

function generatePassword() {
  // must return string value
  // prompt user to choose num btwn 8 and 128
  // validate user num btwn 8 and 128
  // confirm prompts for lowercase uppercase numeric and/or special characters
  // 4 vars to save t.f ti included characters
  // Vars that include all user options of each category (array of string for each category).
  // var upper = ["A","B",]
  // If user says yes to include, then use index(Math.floor(Math.random(arrayname)))
  // How to deide how many elemnts to choose from array
  // Validate at least one cat was chosen
  // Join chosen elements into string
  var upperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialChar = [',', '.', '!', '@','#','$','%','^','&','*',];
  var numb = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var length = window.prompt("Please enter a number between 8 and 128");
  var length1 = parseInt(length);
  var addupper = window.confirm("Would you like to have uppercase characters?");
  var addlower = window.confirm("Would you like to have lowercase characters?");
  var addnum = window.confirm("Would you like to add numbers?");
  var addspec = window.confirm("Would you like to add special characters?");

  if (length < 8 || length > 128) {
    window.alert("Please input a number ONLY BETWEEN 8 and 128")
    return;
  };

  if (addupper !== true && addlower !== true && addnum !== true && addspec !== true) {
    window.alert("Please say true to at least one category")
    generatePassword();
  };
  var password = '';
  for (i = 0; i <= length1; i++) {

    if (addupper === true) {
      var index = Math.floor(Math.random() * upperC.length)
      password += upperC[index];
    };
    if (addlower === true) {
      var index2 = Math.floor(Math.random() * lowerC.length)
      password += lowerC[index2]
    };
    if (addnum === true) {
      var index3 = Math.floor(Math.random() * numb.length)
      password += numb[index3]
    };
    if (addspec === true) {
      var index4 = Math.floor(Math.random() * specialChar.length)
      password += specialChar[index4]
    };


  };

  password = password.slice(0, length1);

//     for (let i = password.length-1; i>0; i--) {
//       const j = Math.floor(Math.random() *(i+1));
//       const tempr = password[i];
//       password[i] = password[j];
//       password[j] = tempr
//     }

  
// console.log(tempr)
  
  console.log(password);
  return password;

}