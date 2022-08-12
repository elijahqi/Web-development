function play_sound(key){
  switch (key) {
    case "w":
      var tom1= new Audio("assets/sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2= new Audio("assets/sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3= new Audio("assets/sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4= new Audio("assets/sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare= new Audio("assets/sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash= new Audio("assets/sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick= new Audio("assets/sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(key);
  }
}

function button_animation(key){
  var cur=document.querySelector("."+key);
  cur.classList.add("pressed");
  setTimeout(function(){cur.classList.remove("pressed");},100);
}

var buttons=document.querySelectorAll(".drum");



for (var i=0;i<buttons.length;++i){
  buttons[i].addEventListener("click",function(){
    var button_inner_html=this.innerHTML;
    play_sound(button_inner_html);
    button_animation(button_inner_html);
  });
}

document.addEventListener("keydown", function (event){
  play_sound(event.key);
  button_animation(event.key);
});
