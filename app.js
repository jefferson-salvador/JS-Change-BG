const body = document.querySelector("body");
const h2 = document.querySelector("h2");

var logArray = [''];

function changeBg(){
    // call the random() function to produce decimal number
    var color = `#${random()}${random()}${random()}${random()}${random()}${random()}`;
    body.style.backgroundColor = color;
    h2.innerHTML = color;
    logArray.push(color);
}

function random(){
    // Produce decimal number from 0 to 255
    var hex = Math.floor(Math.random()*15).toString(16);
    // Pass the decimal number to the caller
    return(hex);
}