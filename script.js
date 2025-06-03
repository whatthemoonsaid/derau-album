{\rtf1\ansi\ansicpg1252\cocoartf2758
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const songs = [\
  \{\
    title: "Feeling This",\
    plays: "221,371,039",\
    duration: "2:52",\
    file: "assets/feeling-this.mp3"\
  \},\
  \{\
    title: "Obvious",\
    plays: "33,587,357",\
    duration: "2:43",\
    file: "assets/obvious.mp3"\
  \},\
  \{\
    title: "I Miss You",\
    plays: "933,939,353",\
    duration: "3:47",\
    file: "assets/i-miss-you.mp3"\
  \}\
];\
\
const songList = document.getElementById("song-list");\
const player = document.getElementById("audio-player");\
const nowPlaying = document.getElementById("now-playing-title");\
\
songs.forEach((song, index) => \{\
  const row = document.createElement("tr");\
  row.classList.add("hover:bg-white/10", "cursor-pointer");\
  row.innerHTML = `\
    <td>$\{index + 1\}</td>\
    <td>$\{song.title\}</td>\
    <td>$\{song.plays\}</td>\
    <td class="text-right">$\{song.duration\}</td>\
  `;\
  row.addEventListener("click", () => \{\
    player.src = song.file;\
    player.play();\
    nowPlaying.textContent = song.title;\
  \});\
  songList.appendChild(row);\
\});\
}