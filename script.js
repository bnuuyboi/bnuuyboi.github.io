function sayHi() {
    alert("Hey! This works!");
}

document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("playButton");
    const pauseButton = document.getElementById("pauseButton");
    const bgMusic = document.getElementById("bgMusic");
    const songSelector = document.getElementById("songSelector");
    const songName = document.getElementById("songName");
    const secretButton = document.getElementById("secretButton");

    // Default song
    bgMusic.src = songSelector.value;
    songName.innerText = "Now Playing: " + songSelector.options[songSelector.selectedIndex].text;

    playButton.addEventListener("click", () => {
        bgMusic.play();
    });

    pauseButton.addEventListener("click", () => {
        bgMusic.pause();
    });

    songSelector.addEventListener("change", () => {
        const selectedText = songSelector.options[songSelector.selectedIndex].text;

        bgMusic.src = songSelector.value;
        songName.innerText = "Now Playing: " + selectedText;
        bgMusic.play();

        // 👇 SECRET LOGIC
      if (secretButton) {
    if (selectedText === "Dream sweet in Sea major") {
        secretButton.style.display = "inline-block";
    } else {
        secretButton.style.display = "none";
    }
    });

    // Secret button click
    secretButton.addEventListener("click", () => {
        window.location.href = "secret.html";
    });
});
    });
});
