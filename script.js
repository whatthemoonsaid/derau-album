const songs = [
  {
    title: "Waiting",
    plays: "3,999,302",
    duration: "3:59",
    file: "assets/Waiting.mp3"
  },
  {
    title: "Orang Orang Di Kerumunan",
    plays: "4,587,357",
    duration: "3:57",
    file: "assets/OrangOrangDiKerumunan.mp3"
  },
  {
    title: "Sundowner",
    plays: "7,939,353",
    duration: "3:25",
    file: "assets/Sundowner.mp3"
  },
  {
    title: "Nowhere End",
    plays: "2,781,489",
    duration: "3:47",
    file: "assets/Nowhere_End.mp3"
  },
  {
    title: "Exits",
    plays: "1,945,200",
    duration: "3:50",
    file: "assets/Exits.mp3"
  },
  {
    title: "Ground",
    plays: "2,073,170",
    duration: "3:33",
    file: "assets/Ground.mp3"
  },
  {
    title: "Hilang",
    plays: "5,030,210",
    duration: "4:47",
    file: "assets/Hilang.mp3"
  },
  {
    title: "Favourite",
    plays: "11,235,250",
    duration: "4:27",
    file: "assets/Favourite.mp3"
  },
  {
    title: "Freakin' Out On The Interstate",
    plays: "9,201,030",
    duration: "4:09",
    file: "assets/Interstate.mp3"
  },
  {
    title: "Take Me First",
    plays: "20,093,120",
    duration: "3:19",
    file: "assets/First.mp3"
  },
  {
    title: "Hancur",
    plays: "4,000,170",
    duration: "3:54",
    file: "assets/Hancur.mp3"
  },
  {
    title: "You're The Only Good Thing in My Life",
    plays: "25,029,980",
    duration: "4:35",
    file: "assets/OnlyGood.mp3"
  },
  {
    title: "Sampai Jumpa",
    plays: "19,580,170",
    duration: "4:47",
    file: "assets/SampaiJumpa.mp3"
  }
];

const songList = document.getElementById("song-list");
const player = document.getElementById("audio-player");
const playBtn = document.getElementById("play-pause");
const playIcon = document.getElementById("play-icon");
const titleText = document.getElementById("player-title");
const artistText = document.getElementById("player-artist");
const coverImg = document.getElementById("player-cover");
const progressBar = document.getElementById("progress-bar");
const currentTimeText = document.getElementById("current-time");
const totalTimeText = document.getElementById("total-time");
const volumeControl = document.getElementById("volume-control");

let currentTrackIndex = null;

// Render tracklist
songs.forEach((song, index) => {
  const row = document.createElement("tr");
  row.className = "hover:bg-white/10 cursor-pointer transition";
  row.innerHTML = `
    <td class="py-2">${index + 1}</td>
    <td class="py-2">${song.title}</td>
    <td class="py-2">${song.plays}</td>
    <td class="py-2 text-right">${song.duration}</td>
  `;
  row.addEventListener("click", () => playSong(index));
  songList.appendChild(row);
});

// Player
function playSong(index) {
  const song = songs[index];
  player.src = song.file;
  player.play();
  currentTrackIndex = index;
  titleText.textContent = song.title;
  artistText.textContent = "Derau";
  coverImg.src = "assets/cover.jpg";
  updatePlayIcon(true);
}

// Toggle 
playBtn.addEventListener("click", () => {
  if (!player.src) return;
  if (player.paused) {
    player.play();
    updatePlayIcon(true);
  } else {
    player.pause();
    updatePlayIcon(false);
  }
});

function updatePlayIcon(isPlaying) {
  playIcon.innerHTML = isPlaying
    ? `<path d="M6 4h4v16H6zm8 0h4v16h-4z"/>` // pause icon
    : `<path d="M8 5v14l11-7z"/>`; // play icon
}

// Progress bar
player.addEventListener("timeupdate", () => {
  const percent = (player.currentTime / player.duration) * 100;
  progressBar.style.width = `${percent}%`;
  currentTimeText.textContent = formatTime(player.currentTime);
  totalTimeText.textContent = formatTime(player.duration);
});

function formatTime(time) {
  if (isNaN(time)) return "0:00";
  const mins = Math.floor(time / 60);
  const secs = Math.floor(time % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

// Volume control
volumeControl.addEventListener("input", () => {
  player.volume = volumeControl.value;
});
