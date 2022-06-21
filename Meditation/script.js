const audio = new Audio();
const play = document.querySelector('.play');
const main = document.querySelector('.main');
const drozd = document.querySelector('.drozd');
const video = document.querySelector('.video');
let isPlay = false;

play.addEventListener('click', function(event){
    if (event.target.classList.contains('play')) {
        event.target.classList.toggle('pause');
        if (!isPlay) {
            isPlay = true;
            drozd.classList.remove('menu_link_play');
            main.classList.remove('main_drozd');
            audio.src = 'assets/audio/forest.mp3';
            audio.currentTime = 0;
            audio.play();
        } else {
            video.src = '';
            isPlay = false;
            audio.pause();
            drozd.classList.remove('menu_link_play');
        }
    }
})

drozd.addEventListener('click', function(event){
    if (event.target.classList.contains('drozd')) {
        event.target.classList.add('menu_link_play');
        play.classList.add('pause');
        //main.classList.add('main_drozd');
        video.src = '0.mp4';
        audio.src = 'assets/audio/drozd.mp3';
        isPlay = true;
        audio.currentTime = 0;
        audio.play();
    }
})