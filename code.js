//CHAPTER No.1
//(ALERT)

//  1#
alert("Welcome!");

//  2#
alert("Error! Please enter a valid password");

//  3#
alert("Welcome to JS Land...\nHappy Coding!")

// 4#
alert("Welcome to JS land...");
alert("Happy Coding!");

//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------


//CHAPTER No.2
//(VARIABLES FOR STRINGS)

//            1#
let username;

//---------------------------------------------------------------------------------------------------
//            2#
let myName = "Sudais Ashraf Mughal";
//---------------------------------------------------------------------------------------------------

//            3#
// a) 
let say;
// b) 
say = "Hello World";
// c)
alert(say);

//---------------------------------------------------------------------------------------------------

//            4#
let studentName,studentCountry,studentAge,studentHobby;

studentName = prompt("Enter student's name:");
studentAge = parseInt(prompt("Enter student's age:"));
studentCountry = prompt("Enter student's country:");
studentHobby = prompt("Enter student's hobby:");

alert(("Std Name is: ") + studentName);
alert(("Std Age is: ")+ studentAge);
alert(("Std Country is: ") + studentCountry);
alert(("Std Hobby is: ") + studentHobby);

//---------------------------------------------------------------------------------------------------

//            5#
let pizza;
for (let i = pizza.length; i > 0; i--) {
    alert(pizza.substring(0, i));
  }

 // -------------------------------------------------------------------------------------------------

  //            6#
let email;
email= "sudais.ashraf.919@gmail.com";
let message = "Your email address is: " + email;
alert(message);

//---------------------------------------------------------------------------------------------------

//            7#
let book="A smarter way to learn JavaScript";
alert(book);

//---------------------------------------------------------------------------------------------------

//            8#
let myLogo = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(myLogo);
document.write(myLogo);

//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------

//CHAPTER No.3
//(VARIABLES FOR NUMBERS)
//            1#
let age = 19;
alert("I am "+age+" years old ");

//            2#
let noOfVisits = localStorage.getItem('noOfVisits');
if (noOfVisits === null) {
  noOfVisits = 1; 
} else {
  noOfVisits = parseInt(noOfVisits) + 1; 
}
localStorage.setItem('noOfVisits', noOfVisits);

let visitElement = document.getElementById('noOfVisits');
if (visitElement) {
  visitElement.innerHTML = `You have visited this site ${noOfVisits} times`;
} else {
  console.error("Element with id 'noOfVisits' not found");
}