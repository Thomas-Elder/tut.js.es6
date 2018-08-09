
/**
 * The for-of loop and the DOM
 * 
 * It is possible to use the for-of loop on a NodeList. The below snippet changes the 
 * default colour of each div on a website randomly.
 */

let divs = document.querySelectorAll('div');

for (let div of divs){
  let rand = Math.floor(Math.random() * 3);
  div.style.color = ['#990000', '#009900', '#000099'][rand];
}

