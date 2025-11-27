
// Defing button varables
let prev = document.getElementById("prev");
let play = document.getElementById("play");
let next = document.getElementById("next");
let artistName = document.getElementById("artist-name");
let desc = document.getElementById("desc");
let pause = document.getElementById("pause");
let disc = document.getElementById("disc");
let image = document.getElementById("image");

// An array of songs
let songs = [{
    filePhath : "songs/Angel_by-thewing.mp3",
    desc : "Angel by the wing",
    artist : "Sia",
    imagePhath: "images/mhlengi.jpg"
},{
    filePhath : "songs/Jung.mp3",
    desc : "Let him go",
    artist : "Jung",
    imagePhath: "images/naruto.jpg"
},{
    filePhath : "songs/still here.mp3",
    desc : "I am still here",
    artist : "Sia",
    imagePhath: "images/ladiesman.jpg"
}, {
    filePhath : "songs/Tenderlove.mp3",
    desc : "Tender Love",
    artist : "Shasha",
    imagePhath: "images/sign.jpg"
},
{
    filePhath : "songs/Ntyilontyilo.mp3",
    desc : "ntyilo ntyilo ",
    artist : "Cairo",
    imagePhath: "images/cairo.jpg"
},
{
    filePhath : "songs/24 Herero.mp3",
    desc : "Herero awesome beats",
    artist : "Cairo",
    imagePhath: "images/cairo.jpg"
},{
    filePhath : "songs/Fela.mp3",
    desc : "Fela notes",
    artist : "Cairo",
    imagePhath: "images/cairo.jpg"
}, {
    filePhath : "songs/umafikizolo.mp3",
    desc : "Ngishayel' ukufa",
    artist : "Mafikizolo",
    imagePhath: "images/Mhlengi2.jpg"
}, {
    filePhath : "songs/Edsheeran.mp3",
    desc : "All of the stars.",
    artist : "Edsheeran",
    imagePhath: "images/palmtrees.jpeg"
}, {
    filePhath : "songs/Gatsheni.mp3",
    desc : "Awulwazi uthando",
    artist : "Gatsheni",
    imagePhath: "images/Mhlengi2.jpg"
}, {
    filePhath : "songs/kususa-moto-ka-ice-cream-.mp3",
    desc : "Moto ka ice cream",
    artist : "Kususa",
    imagePhath: "images/꒰𝙰𝚒 𝙰𝚛𝚝꒱ Itachi Uchiha.jpg"
}, {
    filePhath : "songs/Shimza-2-Step-Ft-Kabza-De-Small-DJ-VITOTO-(HipHopKit.com).mp3",
    desc : "2 Step",
    artist : "Shimza",
    imagePhath: "images/download (22).jpg"
}];

let songIndex = 0;
let item = songs[songIndex]
let audio = new Audio(item.filePhath)

// A function for playing the the audio
function playAudio() {
artistName.innerText = item.artist;
desc.innerText = item.desc;
image.src = item.imagePhath;
desc.classList.add("move")
disc.classList.add("rotate-disk");
audio.play()
pause.style.display = "block";

audio.onended = () => {
    nextAudio()
}
};

function pauseAudio() {
    audio.pause()
    desc.classList.remove("move")
    disc.classList.remove("rotate-disk");
    pause.style.display = "none";
};

function reset() {
    audio.pause()
};

// A function for playing the next song
function nextAudio() {
    if (songIndex < songs.length) {
        reset();

        songIndex++;

        audio = new Audio(songs[songIndex].filePhath);
        artistName.innerText = songs[songIndex].artist;
        image.src = songs[songIndex].imagePhath
        desc.innerText = songs[songIndex].desc;
        audio.play()

        audio.onended = () => {
            nextAudio()
        }
        
    } else {
        songIndex = 0;
    }
        
};

// A function for playing the previous song
function prevAudio() {
    if (songIndex == 0) {
        reset();
        item = songs.slice(-1)[0]
        songIndex = songs.indexOf(item)
        
         audio = new Audio(songs[songIndex].filePhath);
         artistName.innerText = songs[songIndex].artist;
         image.src = songs[songIndex].imagePhath;
         desc.innerText = songs[songIndex].desc;
         audio.play()

        
        
    } else {
        reset();
        songIndex-=1;
        audio = new Audio(songs[songIndex].filePhath);
        artistName.innerText = songs[songIndex].artist;
        image.src = songs[songIndex].imagePhath;
        desc.innerText = songs[songIndex].desc;
        audio.play()
    }
        
};

play.addEventListener("click", playAudio);
pause.addEventListener("click", pauseAudio);
next.addEventListener("click", nextAudio);
prev.addEventListener("click", prevAudio);
