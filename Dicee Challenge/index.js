var dnumber1=Math.floor(Math.random()*6)+1;
var dnumber2=Math.floor(Math.random()*6)+1;
var img1="assets/images/dice"+dumber1+".png";
var img2="assets/images/dice"+dumber2+".png";

var diceimg1=document.querySelector(".img1").setAttribute("src",img1);
var diceimg2=document.querySelector(".img2").setAttribute("src",img2);


var titletxt=document.querySelector("h1");
if (dnumber1==dnumber2){
  titletxt.textContent="Draw!";
}else if (dnumber1>dnumber2){
  titletxt.textContent="🚩 Player 1 Wins!";
}else{
  titletxt.textContent="Player 2 Wins! 🚩";
}
