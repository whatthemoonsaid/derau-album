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
const nowPlaying = document.getElementById("now-playing-title");

songs.forEach((song, index) => {
  const row = document.createElement("tr");
  row.className = "hover:bg-white/10 cursor-pointer transition";
  row.innerHTML = `
    <td class="py-2">${index + 1}</td>
    <td class="py-2">${song.title}</td>
    <td class="py-2">${song.plays}</td>
    <td class="py-2 text-right">${song.duration}</td>
  `;
  row.addEventListener("click", () => {
    player.src = song.file;
    player.play();
    nowPlaying.textContent = song.title;
  });
  songList.appendChild(row);
});
