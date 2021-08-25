{/* <iframe src="https://open.spotify.com/embed/playlist/7Cq5O9cTVa1OEutcLTYm5x" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>*/}

var music = "https://open.spotify.com/embed/playlist/7Cq5O9cTVa1OEutcLTYm5x";

var SpotifyPlayer = function () {
  return (
    <iframe src={music} title="music" id="spotify-player" width="220" height="200" allowTransparency="true" frameBorder="0" allow="encrypted-media" />
  )

//   var mainDiv = document.getElementById('main'); // grabs #main
//   var musicPath = music; // initialises string variable musicPath
//   var myPlayer = document.createElement('iframe'); // creates a new iframe element
  
//   // add attributes to myPlayer
//   myPlayer.setAttribute('src', musicPath);
//   myPlayer.setAttribute('title', 'music');
//   myPlayer.setAttribute('id', 'spotify-player');
//   myPlayer.setAttribute('width', '220');
//   myPlayer.setAttribute('height', '200');
//   myPlayer.setAttribute('allowtransparency', 'true');
//   myPlayer.setAttribute('frameborder', '0');
//   myPlayer.setAttribute('allow', 'encrypted-media');
  
//   mainDiv.appendChild(myPlayer); // adds a child element (myPlayer) to myDiv
}

export default SpotifyPlayer