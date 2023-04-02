const button = document.getElementById("chicken");

function playMusic() {
  const audio = new Audio("chick.mp3");
  audio.play();
}

button.addEventListener("click", playMusic);
button.addEventListener("mouseover");
