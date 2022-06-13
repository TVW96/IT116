console.log("Hello World");

let randomNumber = Math.random(); //Unless you specify the random int will be between 0.0 - 1

//if (randomNumber < 0.50) {

   // console.log("Condition was Met");
   // console.log(randomNumber);

//}

//if (randomNumber >= 0.5) {

//    console.log('Condition Was Met');
//    console.log(randomNumber);
//}\



//const dayOfWeek = 'Saturday';

//if (dayOfWeek === 'Monday'){
//    console.log("Yay Its Monday");

//} else if (dayOfWeek === 'Friday'){

//    console.log("Yay Its Friday");

//} else if (dayOfWeek === 'Saturday') {

//    console.log("You have the correct day from the variable");
//}


//const age = prompt("Enter An Age");

//if (age < 5) {
//    console.log("Hey, you're a baby!");

//} else if (age < 10) {
//    console.log("Hey, you're just a kid!");
//} else if (age < 35) {
//    console.log("You're getting older.");
//}
// IF ALL OTHER CONDITIONS FAIL - ELSE.
//else {
//    console.log("Your are over the age of 35.");
//}

//const fruit = 'Peach';

//switch (fruit) {

    //case 'Oranges':
        //console.log("Oranges are $0.59 a pound");
        // MUST PUT A 'BREAK' AFTER EACH SWITCH STATEMENT
        //break;
    //case 'Bananas':
        //console.log("Oranges are $0.10 a pound");
        //break;
    //case 'Avocados':
       // console.log("Avocados are expensive");
       // break;
    //case 'Papayas':
        //console.log("Oranges are $0.70 a pound");
       // break;
    //
   // default:
       // console.log("Last Resort If All Conditions Fail");
//}


//const password = prompt("Enter in a new password");
//
//if (password.length >= 6) {
//
//    if (password.indexOf(' ') === -1) {
//        console.log("Valid Password");
//    } else {
//        console.log("Password Cant Have Spaces");
//    }
//} else {
//    console.log("Password is too short");
//}


function singSong() {

    console.log("DO");
    console.log("RE");
    console.log("ME");
}

singSong()
singSong()
singSong()

function greet(firstName, lastName) {

    console.log(`Hey There, ${firstName}`)
}

greet('Boomer');

function greet1(firstName, lastName) {
    console.log(`Hey There, ${firstName} ${lastName}`)
}

greet1('Boomer', 'Sooner') 