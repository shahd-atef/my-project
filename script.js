let firstName="shahd";
let lastName="Atef";
let age=20;
const firstParagraph= document.querySelector("p.first-name");
firstParagraph.textContent= "firstName : " + firstName;

const secondParagraph = document.querySelector("p.last-name");
secondParagraph.textContent= "LastName : " + lastName;

const thirdParagraph= document.querySelector("p.age");
thirdParagraph.textContent= "Age : " + age;
 
const addclass=document.querySelector("div");
addclass.classList.add("parent");

console.error("Done")