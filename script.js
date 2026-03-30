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
    .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
    padding: 10px;
}

.gallery img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 10px;
    transition: transform 0.2s;
}

.gallery img:hover {
    transform: scale(1.05);
}

/* Fullscreen viewer */
#imageViewer {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.9);
    justify-content: center;
    align-items: center;
}

#imageViewer img {
    max-width: 90%;
    max-height: 90%;
}
});
