//console.log("Hello world");
//Exploring the DOM and it's controls

var itemlist = document.querySelector("#items");
//parentNode property

console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor = "black";
// This changes the parent node and makes changes

console.log(parentNode.parentNode);
// Targets the div container
console.log(parentNode.parentNode.parentNode);
//Targets the body

//parentElement
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor = "black";
console.log(itemlist.parentElement);
// Can be interchangable with parenNodes

//childNodes

console.log(itemlist.childNodes);
// targets Everything on page, including whitspace. children is better practice

// children 
console.log(itemlist.children);
// just looks at elements, no whitespace

//access specific child
console.log(itemlist.children.[1]);
itemlist.children[1].style.backgroundColor='black'

//firstchild
console.log(itemlist.firstChild);

//firstElementChild
console.log(itemlist.firstElementChild);
// targets first element
itemlist.firstElementChild.textContent="Hello world"
//lastChild
// SEE ABOVE *** ELEMENT CHILD === BETTER PRACTICE***
//lastElementChild
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent="Hello Pluto"

//nextSibling
console.log(itemlist.nextSibling);
//nextElementSibling
console.log(itemlist.nextElementSibling);

//previousSibling
console.log(itemlist.previousSibling);
itemlist.previousSibling
//previousElementSibling
console.log(itemlist.previousElementSibling)
itemlist.previousElementSibling

//createElement
//create a div
const newDiv = document.createElement('div')
console.log(newDiv)

//Add a class to it
newDiv.className="Hello Venus";

//Add ID
newDiv.id="Hello Jupiter";

//Add title attr.
newDiv.setAttribute('title','hello john');

//Create a textNode

const newDivText= document.createTextNode('Hello Milky Way');

// Add tect to div

//Append to website
newDiv.appendChild(newDivText)

const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);


// **** EVENTS ****