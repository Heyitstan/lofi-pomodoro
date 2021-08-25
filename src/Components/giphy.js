var gif = "https://media1.giphy.com/media/RMwgs5kZqkRyhF24KK/giphy.gif?%E2%80%A68b9cigz8i9zhf17rkkqyxckwp7j7kd4xhyppecpw0&rid=giphy.gif&ct=g";

var gifList = []

var generateList = (data) => {
  for( let i = 0; i < 15; i++) {
    gifList.push(data.data.[i].images.original.url)
  };
}

fetch("https://api.giphy.com/v1/gifs/search?api_key=fw59qRGgKMWBeCqRy39YOomgcWI3iRWq&q=lofi+anime&limit=15&offset=0&rating=g&lang=en")
  .then(response => response.json())
  .then(data => generateList(data))

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

export {gifList}
export default background