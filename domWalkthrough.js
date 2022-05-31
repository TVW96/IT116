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

document.all[10].textContent = "I just changed the header!";