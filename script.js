const songs = [
  {
    title: "Feeling This",
    plays: "221,371,039",
    duration: "2:52",
    file: "assets/feeling-this.mp3"
  },
  {
    title: "Obvious",
    plays: "33,587,357",
    duration: "2:43",
    file: "assets/obvious.mp3"
  },
  {
    title: "I Miss You",
    plays: "933,939,353",
    duration: "3:47",
    file: "assets/i-miss-you.mp3"
  },
  {
    title: "Violence",
    plays: "33,781,489",
    duration: "3:39",
    file: "assets/violence.mp3"
  },
  {
    title: "Stockholm Syndrome Interlude",
    plays: "11,075,270",
    duration: "1:40",
    file: "assets/stockholm-syndrome-interlude.mp3"
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
