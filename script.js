function sayHi() {
    alert("Hey! This works!");
}
// Play music when button is clicked
const playButton = document.getElementById("playButton");
const bgMusic = document.getElementById("bgMusic");

playButton.addEventListener("click", () => {
    bgMusic.play()
        .then(() => {
            playButton.disabled = true;
            playButton.innerText = "🎵 Playing...";
        })
        .catch((err) => {
            console.error("Audio playback failed:", err);
            playButton.innerText = "❌ Error playing";
        });
});
