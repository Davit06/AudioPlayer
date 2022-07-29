var data = {

    title : [
        "Outlandish - Callin U",
        "REINCARNATION - Kancnen Orer",
        "Tata Simonyan & 3.33 - Dzyune Halel Er", 
        "BLR x POOK - Taj",
        "Arto Tuncboyacyan - Heres to You Ararat",
        "Lyoka & Artem Valter - Tun Tareq",
    ],

    song :[
        "music/Outlandish - Callin U.mp3",
        "music/REINCARNATION - Kancnen Orer.mp3",
        "music/Tata_Simonyan_ft._3.33_-_Dzyune_Halel_er_(2020).mp3",
        "music/blrxrave_crave-taj.mp3",
        "music/Arto Tuncboyaciyan  - Heres to You Ararat mp3.mp3",
        "music/dow.mp3",
    ],

    poster : [
        "https://i.gifer.com/LLuC.gif",
        "https://i.gifer.com/1uUh.gif",
        "https://i.gifer.com/J4o.gif",
        "https://i.gifer.com/7nUw.gif",
        "https://i.gifer.com/fxvT.gif",
        "https://i.gifer.com/4RNn.gif",

    ],

} 

var song = new Audio();

window.onload = function (){
    playSong()
}


var currentSong = 0;

function playSong() {
    song.src = data.song[currentSong];

    let songTitle = document.getElementById("songTitle");
    songTitle.textContent = data.title[currentSong];

    let img = document.getElementById("row1");
    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();

    let main = document.getElementById("main");
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();
}

function playOrPauseSong(){
    let play = document.getElementById("play")


    if (song.paused) {
        song.play();
        play.src = "images/pausee.png" // pause
    }else{
        song.pause();
        play.src = "images/playbutton.png" // play
    }
}


song.addEventListener("timeupdate", function () {
    let fill = document.getElementById("fill")
    let position = song.currentTime / song.duration;
    fill.style.width = position * 100 + "%";

    convertTime(song.currentTime)

    if (song.ended) {
        next()
    }
})


function convertTime (seconds) {
    let currentTime = document.getElementById("currentTime")
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ?"0" + sec : sec;

    currentTime.textContent = min + ":" + sec;

    totalTime(Math.round(song.duration))

}


function totalTime(seconds){
    var min = Math.floor(seconds / 60)
    var sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    if(isNaN(min) || isNaN(sec)) {
        return false
    }else {
        currentTime.textContent += "/" + min + ":" + sec;
    }

    
}

function next () {
    currentSong++;
    if(currentSong >= data.song.length){
        currentSong = 0;
    }
    playSong();
    play.src = "images/pausee.png"
}

function pre(){
    currentSong--;
    if(currentSong < 0){
        currentSong = data.song.length - 1;
    }
    playSong();
    play.src = "images/pausee.png"
}


function muted() {
    var mute = document.getElementById("mute")
    if(song.muted) {
        song.muted = false
        mute.src = "images/volumee.png"    //mute
    } else {
        song.muted = true
        mute.src = "images/mutee.png"    //unmute
    }
}

function decrease () {
    song.volume -= 0.2;
} 

function increase () {
    song.volume += 0.2;
}

