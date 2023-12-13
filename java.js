/*
Document --> HTML
Style --> CSS
Script --> JS
*/
/*_______________________________________________________________________________________________________________________________________________________ */

// alert("Hello");  // to send a message in the website for the user

/*_______________________________________________________________________________________________________________________________________________________ */

// prompt("How old are you ?"); // to make the user enter an input

/*_______________________________________________________________________________________________________________________________________________________ */
/*

- To be able to write in JS

document.write("<h1> Mak said : \"Hello\" </h1>"); 
document.write("<h1>" + (25+10) + "</h1>"); 

*/
/*_______________________________________________________________________________________________________________________________________________________ */
/*

- It saves the data you typed to the variable you named
      var ==> Variable Value
var name = "Makrious";
var age = "20";

*/
/*_______________________________________________________________________________________________________________________________________________________ */
/*
  
 Get --> document.getElementById("mak");       ==> in order to get any element written in html by its named id 
     --> document.getElementByClass("mak");    ==> in order to get any element written in html by its named class
*/

// document.getElementById("mak").innerHTML = "Mak"; // ==> in order to change what is written inside the id you called

// document.getElementById("mak").style.backgroundColor = 'red'; // ==> in order to change what is written inside the css codes

/*_______________________________________________________________________________________________________________________________________________________ */ 
/*     
  - if conditional

var age; 
age = prompt("How old are you ?");

if(age <= 18){
    alert("Your age is not alowed here.");
}
else if(age < 60 && age > 50){
    alert("you are in the 50's")
}
else{
    alert("Age not Identified.")
}
*/
/*_______________________________________________________________________________________________________________________________________________________ */
/*
  - loop

  for(start ; condition ; incriment){ } 
*/
/* 
var x;
for(x=2023; x>=1919; x--){
  document.write("<h3>"+x+"</h3>");
}  
*/
/*_______________________________________________________________________________________________________________________________________________________ */
/*
  - Switch
 
*/
/*
var season;
season=prompt("Whats you fav season ?!")
switch (season) {
  case "summer":
    alert("Too Hot")
    break;
  
  case "winter":
    alert("Too cold")
    break; 
    
  case "spring":
    alert("Nice !!!")
    break;

  case "autumn":
    alert("Amazing !!")
    break;

  default:
    alert("Not Identified")
    break;
}
*/
/*_______________________________________________________________________________________________________________________________________________________ */
/*
var and let ==> they do the same job 

but the main difference that let cannot be reassigned or redeclared
*/
/*_______________________________________________________________________________________________________________________________________________________ */
/*
  - Function   => Dry dont repeat yourself
  
                         //  Example 1

  /*
  function mak(){
    var age, first_name, last_name ;

    first_name = prompt("Enter your First name");
    last_name = prompt("Enter your Last name");
    age = prompt("How old are you ?");

    console.log(`Hello ${first_name} ${last_name} \n you are ${age} years old.`);

    
  }
  mak();      // it is used to call the function
  */

                       //  Or

  /*
  function mak( first_name ,last_name ,age){
    console.log(`Hello ${first_name} ${last_name} \n you are ${age*365*24*60} minute.`);
  }
  mak("Makrious" , "Ayman", "19");      // it is used to call the function
  */

                       //  Example 2

  /*
  function balance( first_name ,last_name ,sallary){

    var sallary_after_taxis = sallary - (0.14 * sallary) ;
    console.log(`Hello Mr. ${first_name} ${last_name} \n your sallary is ${sallary} EGP \n We have taken ${sallary - sallary_after_taxis} EGP \n Sallary after Taxis is ${sallary_after_taxis} EGP \n In Dollar ${sallary_after_taxis/31} \n In Euro ${sallary_after_taxis/35}`);
  }
  balance("Makrious" ,"Ayman", "2500");
  */
  
/*_______________________________________________________________________________________________________________________________________________________ */
/*
                 C H I C K E N
Position ==>     0 1 2 3 4 5 6 
No of char. ==>  1 2 3 4 5 6 7

*/

// Programe to count the no of characters in the article the user enters

/*
var article = prompt("Write an article");
console.log(`No. of Characters are ${article.length}.`);
*/

/*
var mak = "Makrious ";

console.log("No of characters are " + mak.length);   // to determine the no of charachters btw the quotation mark.
console.log(mak.toUpperCase());   // Convert all characters to upper case
console.log(mak.toLowerCase());  // Convert all characters to lower case 
console.log(mak.trim()) ;       // clear the spaces
console.log(mak.indexOf("Makrious"));   // to search a string that is identified
*/

//  Programe to replace a character or a name to another

/*
var x ="Makrious Ayman Riad";
console.log(x.slice(8,12));  // to count from a specific no of character to another specific no of character
console.log(x.replace("Ayman" , "Mina"));  
*/

//  Programe to erase the rest of any thing written exceeds the maximum value

/*
var article = prompt("Write an article (Max n. of characters are 10)");
console.log(`No of characters are ${article.length}`);
console.log(article.slice(0,10));
*/
/*_______________________________________________________________________________________________________________________________________________________ */

//   - Arrow function
/*
var x = 1;

setInterval( ()=>{
  console.log(x);
  x++;
} , 1000)
*/
/*_______________________________________________________________________________________________________________________________________________________ */


// const button = document.createElement('button');
// button.textContent= 'Click here';

// button.addEventListener('click',
// function(){
//   const input = prompt("Are you Mariam ? \n (answer by yes/no)");
//   console.log('user input :', input );

//   if (input == "yes" || input == "Yes" ) {
//     alert("Happy Birthday Samiiiir :) \n  كل سنة و انتى طيبة و عقبال 1000000 سنة \n Wish you all the best and a great success in your life .\n \n \n This programe is made by a computer science student. \n \t I wish you liked this message :)");
//   } else if (input == "No" || input == "no") {
//     alert ("This message is not for you :(");
//   }
//   else{
//     alert("Please enter a valid answer 34an madrbaksh ")
//   }
// }
// );
// document.body.appendChild(button);

const button = document.createElement('button');
button.textContent= 'Click here';

button.addEventListener('click',
function(){
  const input = prompt("whats your name ?");
  console.log('user input :', input );
  alert(` Hi ${input}\n Thank you for pressing the link. \n You are Successfuly Hacked.\n Now i got all your information.`);
  alert(`hahaha\n بهزر معاك يصاحبى انا على الله حكايتى لسا`);
  alert(` متدوسش على اي حاجة وخلاص تانى بقا يا اهبل `); 
  alert(`By ; Makrious Ayman`)
}
);
document.body.appendChild(button);




