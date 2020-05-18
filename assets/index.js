import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [ new AutoPlay(), ] });

const tooglePlay = document.querySelector('.tooglePlay');
const tootgleMute = document.querySelector('.tootgleMute');

tooglePlay.onclick = () => {
    player.togglePlay();
};

tootgleMute.onclick = () => {
     player.tootgleMute();
};
