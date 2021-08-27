var music = "https://open.spotify.com/embed/playlist/7Cq5O9cTVa1OEutcLTYm5x";

var SpotifyPlayer = function () {
  return (
    <iframe src={music} title="music" id="spotify-player" width="220" height="200" allowTransparency="true" frameBorder="0" allow="encrypted-media" />
  )
}

export default SpotifyPlayer