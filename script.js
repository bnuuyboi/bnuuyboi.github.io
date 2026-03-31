function sayHi() {
    alert("Hey! This works!");
}

document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("playButton");
    const pauseButton = document.getElementById("pauseButton");
    const bgMusic = document.getElementById("bgMusic");
    const songSelector = document.getElementById("songSelector");
    const songName = document.getElementById("songName");

    // Set default song
    bgMusic.src = songSelector.value;
    songName.innerText = "Now Playing: " + songSelector.options[songSelector.selectedIndex].text;

    playButton.addEventListener("click", () => {
        bgMusic.play();
    });

    pauseButton.addEventListener("click", () => {
        bgMusic.pause();
    });

    songSelector.addEventListener("change", () => {
        bgMusic.src = songSelector.value;
        songName.innerText = "Now Playing: " + songSelector.options[songSelector.selectedIndex].text;
        bgMusic.play();
    });

});
