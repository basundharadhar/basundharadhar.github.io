const d = new Date();
document.getElementById("date").innerHTML = d;
date.style.textAlign = "center";
// greeting.style.marginTop = "50px";
// const username = window.prompt("What's your name?", "enter here");
// //greeting.innerHTML = "Welcome to my website, " + username + "!";
// window.alert("Welcome to my website " + username + "!");

// To display the date in 2 different colors every second  
function flash() {
    var text = document.getElementById('date');
    text.style.color = (text.style.color == 'red') ? 'blue' : 'red';
    text.style.fontWeight = (text.style.fontWeight == '1000') ? '' : '1000';
}
var clr = setInterval(flash, 1000);

