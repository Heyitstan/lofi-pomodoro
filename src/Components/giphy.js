import { useState } from "react";

var gifInit = "https://media1.giphy.com/media/RMwgs5kZqkRyhF24KK/giphy.gif?%E2%80%A68b9cigz8i9zhf17rkkqyxckwp7j7kd4xhyppecpw0&rid=giphy.gif&ct=g";

const gifList = [gifInit, 
"https://media1.giphy.com/media/gFPxNhzEWdFCCRAqf0/giphy.gif?cid=790b76119c5a460a09a74cff524d5ea989c856a86691d799&rid=giphy.gif&ct=g", 
"https://media0.giphy.com/media/fUpvkRuLKE4xMBJLvH/giphy.gif?cid=790b7611bc35d6d5c7a5b2e9a3dfefe8f8f443995960c9a0&rid=giphy.gif&ct=g",
"https://media3.giphy.com/media/jUJgL0iByjsAS2MQH1/giphy.gif?cid=ecf05e47p6rd9yx1iusj5exzd1isxfhc5h72bg8kpnh3y0p9&rid=giphy.gif&ct=g",
"https://media1.giphy.com/media/Mmh3uG0srGGqFm5Vmw/giphy.gif?cid=790b761173bab2492e6f8ee0352fd8a1ca59d226f63fa7ef&rid=giphy.gif&ct=g", 
"https://c.tenor.com/xApfXYQZOy8AAAAC/kaito-study.gif", 
"https://i.pinimg.com/originals/76/09/46/7609468e97e15d1da8d14d534be7366c.gif",  
"https://media1.giphy.com/media/WRRL1EKo9rNe12S4zh/giphy.gif?cid=790b7611d787cb6091dbcaaa1e743a81812e8341aa79e2b7&rid=giphy.gif&ct=g"]

var generateList = (data) => {
  for( let i = 0; i < 25; i++) {
    gifList.push(data.data.[i].images.original.url)
  };
  console.log(gifList)
}

fetch("https://api.giphy.com/v1/gifs/search?api_key=fw59qRGgKMWBeCqRy39YOomgcWI3iRWq&q=anime+background&limit=25&offset=0&rating=g&lang=en")
  .then(response => response.json())
  .then(data => generateList(data))

var Background = function () {
  const [src, setSrc] = useState(gifInit);

  const generateNewBackground = () => {
    const rndInt = Math.floor(Math.random()*32);
    const newGif = gifList[rndInt]
    setSrc(newGif)
    }

  return (
    <div>
      <img src= {src} id="background" alt='background'/>
      <button id="random-background-btn" type="button" className="btn" onClick={generateNewBackground}>New background</button>
    </div>
  )
}


export default Background