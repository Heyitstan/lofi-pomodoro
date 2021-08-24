var music = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/325736605&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=&visual=true";

var musicPlayer = function () {
  var mainDiv = document.getElementById('main'); // grabs #main
  var musicPath = music; // initialises string variable musicPath
  var myPlayer = document.createElement('iframe'); // creates a new iframe element
  
  // add attributes to myPlayer
  myPlayer.setAttribute('src', musicPath);
  myPlayer.setAttribute('title', 'music');
  myPlayer.setAttribute('id', 'music-player');
  myPlayer.setAttribute('width', '220');
  myPlayer.setAttribute('height', '100');
  myPlayer.setAttribute('scrolling', 'no');
  myPlayer.setAttribute('frameborder', 'yes');
  
  mainDiv.appendChild(myPlayer); // adds a child element (myPlayer) to myDiv
}

export default musicPlayer