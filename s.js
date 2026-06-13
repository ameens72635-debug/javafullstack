let great = document.getElementById('great');
console.log(great);
let what= document.getElementsByClassName('what');
console.log(what);
let height = document.getElementsByTagName('height');
console.log(height);
let height2 = document.querySelector('height');
console.log(height2);
let height3 = document.querySelectorAll('height');
console.log(height3);   
let height4 = document.getElementById('great');
height4.innerText = "HAPPY BIRTHDAY Ameen!";
height4.style.color = "red";
height4.innerHTML = "<h1>HAPPY BIRTHDAY Ameen!</h1>";
height4.style.fontSize = "50px";
height4.style.fontStyle = "italic";
height4.style.textAlign = "center";
// Select the image
let img = document.querySelector("img");

// Apply CSS styles using JS
img.style.display = "block";       // makes it a block element
img.style.marginLeft = "auto";     // auto margin left
img.style.marginRight = "auto";    // auto margin right
