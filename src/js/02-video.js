import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEOTIME_KEY = 'videoplayer-current-time';


player.setCurrentTime(localStorage.getItem(VIDEOTIME_KEY)|| 0);


player.on('timeupdate',throttle(function (event) {
    localStorage.setItem(VIDEOTIME_KEY, event.seconds);
  }, 1000)
);
