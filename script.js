
var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");
var title = document.getElementById("title");

var randomNum1 = Math.floor(Math.random()*6) + 1 ;
var randomNum2 = Math.floor(Math.random()*6) + 1 ;


image1.setAttribute("src", "./images/dice" + randomNum1 + ".png");
 image2.setAttribute("src", "./images/dice" + randomNum2 + ".png");
if(randomNum1 === randomNum2){
  title.textContent = "Draw!! Refresh Again" ;
}
else if(randomNum1 > randomNum2){
  title.textContent = "🚩 Player 1 Won..." ;
}
else{
  title.textContent = "Player 2 Won 🚩..." ;
}