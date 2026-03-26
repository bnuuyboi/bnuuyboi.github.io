function sayHi() {
    alert("Hey! This works!");
}

document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("playButton");
    const bgMusic = document.getElementById("bgMusic");

    playButton.addEventListener("click", () => {
        bgMusic.play().then(() => {
            playButton.innerText = "🎵 Playing...";
        }).catch((error) => {
            console.log("Audio failed:", error);
        });
    });
});
