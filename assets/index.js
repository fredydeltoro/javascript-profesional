import MediaPlayer from "./MediaPlayer.js";

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video });

const button = document.querySelector('button');
button.onclick = () => {
    button.textContent = 'Pause';
    if (!player.media.paused) {
        button.textContent = 'Play';
    }
    player.togglePlay()
};