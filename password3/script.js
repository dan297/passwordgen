var generateBtn = document.querySelector("#generate");


var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharactor = ["@", "$", "!", "&", "^", "-", "+", "?", "<", ">"]


function writePassword() {
  var randomfigure = []
  var length = window.prompt("How long do you want your password? (8-128 characters).")

if(length < 8 && length > 128){
    window.prompt("PLEASE PICK A NUMBER BETWEEN 8 - 128.")

} else {
  var lowercase = confirm("Do you want lowercase lettering");
  var upperCase = confirm("Do you want uppercase lettering");
  var numbers = confirm("Do you want numbers?");
  var specialCharactor = confirm("Do you want special characters?");

  if (lowercasetrue) { randomfigure.push(lowercase) };
  if (upperCasetrue) { randomfigure.push(upperCase) };
  if (numberstrue) { randomfigure.push(numbers) };
  if (specialCharactortrue) { randomfigure.push(specialCharactor) };

  var password = ""
    while(password.length < length) {

      for (var i = 0; i < randomfigure.length; i++) {
        if (password.length < length){
       var randompass = Math.floor(Math.random() * randomfigure[i].length)
      password += randomfigure[i][randompass]
        }
    }
  }
}
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);

writePassword();
