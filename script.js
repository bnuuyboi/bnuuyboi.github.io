function sayHi() {
    alert("Hey! This works!");
}
// Play music when button is clicked
const playButton = document.getElementById("playButton");
const bgMusic = document.getElementById("bgMusic");

playButton.addEventListener("click", () => {
    bgMusic.play();
    playButton.disabled = true; // optional: disable after clicking
    playButton.innerText = "🎵 Playing...";
});
