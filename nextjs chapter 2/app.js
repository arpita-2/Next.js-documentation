/**
 * To manipulate an element inside the DOM, you first need to select it and store a reference to it inside a
 * variable.
 */

const variable = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const section = document.querySelector("section");
//let's create a new paragraph using Document.createElement() and give it some text content in the same way as before:

const element = document.createElement("p");
element.textContent = "Hope I die soon";
section.appendChild(element);

//creating a text node
const text = document.createTextNode(
  " — the premier source for web development knowledge."
);
//adding reference
const linkPara = document.querySelector("p");
text.appendChild(linkPara);
