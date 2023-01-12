let elBody = document.getElementsByTagName("body");

console.log(elBody);


let premierEnfant = elBody[0].firstChild;

console.log(premierEnfant);


let dernierEnfant = elBody[0].lastChild;

console.log(dernierEnfant);


let exo4 = document.getElementsByTagName("div")[0];

console.log(exo4.children);


let premierLi = document.getElementsByTagName("li")[0];

console.log(premierLi.nextSibling);



let secondLi = document.getElementsByTagName("li")[1];

console.log(secondLi.previousSibling);