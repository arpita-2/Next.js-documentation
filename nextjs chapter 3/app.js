// inside the script tag, you can use a DOM method, getElementById(), to select the <div> element by its id:
const root = document.getElementById("root");
//creating a h1 tag in js
const heading = document.createElement("h1");
//creating a text node

const text = "I want to die";
const headingContent = document.createTextNode(text);

//now append the text to H1 element
heading.appendChild(headingContent);

//now place the h1 element inside the root or div
root.appendChild(heading);
