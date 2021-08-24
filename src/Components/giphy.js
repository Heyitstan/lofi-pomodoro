var gif = "https://media3.giphy.com/media/RMwgs5kZqkRyhF24KK/giphy.gif?cid=ecf05e47ala4tra0quxj45tgqs3j07uey1ren7vnkfw0p6xf&rid=giphy.gif&ct=g";

var background = function () {
  var myDiv = document.getElementById('bg'); // grabs #bg
  var myPath = gif; // initialises string variable myPath
  var myImg = document.createElement('img'); // creates a new img element

  // add attributes to myImg
  myImg.setAttribute('src', myPath);
  myImg.setAttribute('id', 'background');
  myImg.setAttribute('alt', "background image"); 
  
  myDiv.appendChild(myImg); // adds a child element (myImg) to myDiv
}

export default background