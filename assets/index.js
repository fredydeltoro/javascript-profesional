import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [ new AutoPlay(), new AutoPause(), ] });

const togglePlay = document.querySelector('.tooglePlay');
const toggleMute = document.querySelector('.tootgleMute');

togglePlay.onclick = () => {
  player.togglePlay();
};

toggleMute.onclick = () => {
  player.toggleMute();
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  });
}