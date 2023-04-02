const button1 = document.getElementById("chicken");
const button2 = document.getElementById("cow");
const button3 = document.getElementById("bird");

function playMusic() {
  const audio = new Audio("chick.mp3");
  audio.play();
}
function playMusic() {
  const audio = new Audio("cow.mp3");
  audio.play();
}

button1.addEventListener("click", playMusic);
button2.addEventListener("click", playMusic);
