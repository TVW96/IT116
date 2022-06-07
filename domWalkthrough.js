console.dir(document);

//Gieves the domain of the web page.
console.log(document.domain);
//Gives the URL of the web page.
console.log(document.URL);

// THE DOCUMENT ATTRIBUTE CAN ACCESS DIFFERENT ELEMENTS.

//console.log(document.title);

//console.log(document.doctype);

//console.log(document.head);

//console.log(document.body);

//console.log(document.all);

console.log(document.all[10]);
/* changing the header without changingthe header */
document.all[10].textContent = "I am changing the header";
/*checking for the amount of forms we have*/
console.log(document.forms);

/* Checking the log for images and links */
console.log(document.links);
console.log(document.images);

////////////////////////////
//GetElementByID
////////////////////////////////////////////////////////

console.log(document.getElementById('header-title'));


let headerTitle = document.getElementById('header-title');
console.log(headerTitle);

headerTitle.textContent = "Changed the Title again."
headerTitle.innerText = "Hello Changed You Again"

headerTitle.style.color = 'hotpink';

////////////////////////////////////
//GetElementByClassName
//////////////////////////
var items = document.getElementsByClassName('list-group-item')

console.log(items);

// Finding items based on the index
//
//items[1].style.backgroundColor = 'pink';
//items[1].style.fontWeight = 'bold';
//items[1].textContent = 'Skee Wee'
//items[1].style.color = 'green';

//items[0].style.backgroundColor = 'purple';
//items[0].style.fontWeight = 'bold';
//items[0].textContent = 'Fwu Kah'
//items[0].style.color = 'blue';

//items[2].style.backgroundColor = 'blue';
//items[2].style.fontWeight = 'bold';
//items[2].textContent = 'Stay Frosty'
//items[2].style.color = 'white';

//////////////////////////////////////
//////// THE FOR LOOP
////////////////////////////////////////////////////

//for ( let i = 1; i <=10; i++ ){
//   console.log(i);
//}

////////////////////////////////////////
//COUNTING TO 20 BY 2 FROM 'let i = 1'

//for (let i = 1; i <=20; i+=2) {
//    console.log(i);
//}

////////////////////////////////////////////
//THE FOR LOOP FOR COUNTING IN INCREMENTS OF 'TWO'

//for (let i = 100; i >= 0; i-=2) {
//    console.log(i);
//}

//////////////////////////////////////////////
// Constant Array of Names, Called with For loop
//const myDiamonds = ['Snacky','Scary','Lily','IttyBitty','Pinchie','Piggy','Lanky','Nibbles','Kibbles'];

//for (let i = 0; i <myDiamonds.length; i++) {
//    console.log(i, myDiamonds[i])
//}

//for (var i = 0; i < items.length; i++) {

//    items[i].style.backgroundColor = 'grey';
//    items[i].textContent = "Changing the List Items";
//    items[i].style.color = 'white';
//}


//////////////////////////////////////////////////////////////////////////
///////////// getElementsByTagName


// TAG NAME WAS 'li', GOT THE TAG AND CALLED THE INDEX [1]
//var li = document.getElementsByTagName('li');

//console.log(li);
//console.log(li[1]);

//li[1].textContent = "Hello 2 Now";
//li[1].style.fontWeight = 'bold';
//li[1].style.backgroundColor = 'green';
//li[1].style.color = 'white';

//for(var i = 0; i < li.length; i++) {

//    li[1].style.backgroundColor = 'lightgrey';
//    li[1].textContent = "I Changed The Items From the DOM";
//    li[i].style.color = 'white';
//}


///////////////////////////////////////////////////////////////////////////////
////////////////////Query Selector:

//semantic tag query selector
//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4px hotpink';

//element query selector 'input'
//var input = document.querySelector('input');
//input.value = "I just changed the text value in the input box.";

//element type qeury selector (input -> "submit")
//var submit = document.querySelector('input[type="submit"]');
//submit.value = "HELLO BUTTON";

// last Child query selctor "lastItem"
//Calling the last node of the paticular element from querySelect
//var lastItem = document.querySelector('.list-group-item:last-child');
//lastItem.style.color = 'blue';

// nth child query selector 
// n can be a number, keyword(odd or even), or a formula (an + b)
//var otherItem = document.querySelector('.list-group-item:nth-child(2)');
//otherItem.style.color = 'coral';

//////////////////////////////////////////////////////////////////
////QUERY SELECTOR ALL

// query class selectorAll 
// class = "title" // use '.' when calling class
var titles = document.querySelectorAll('.title');
console.log(titles);
// index select the query we have chosen
titles[0].textContent = 'Hey Monte, I changed the title again';

// var even and odd created W/ nth-child(odd) & nth-child(even)
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

// iterating the length of our Variable's
for (var i = 0; i < odd.length; i++) {

    odd[i].style.backgroundColor = 'grey';
    even[i].style.backgroundColor = 'green';
    even[i].style.color = 'whitesmoke';
    odd[i].style.color = 'whitesmoke';
}