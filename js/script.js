document.addEventListener("DOMContentLoaded", function(event) {
    // creating new element and its attributes
    let audioElement = document.createElement("audio");
    audioElement.controls = "controls";
    audioElement.src = "audio/Alok&YvesV-Innocent.mp3";
    // buttons
    let playBtn = document.getElementById("play");
    let pauseBtn = document.getElementById("pause");
    let nextBtn = document.getElementById("next");
    let backBtn = document.getElementById("back");
    let station1 = document.querySelector(".station1");
    let station2 = document.querySelector(".station2");
    let station3 = document.querySelector(".station3");
    let station4 = document.querySelector(".station4");

    let songTitle = document.createElement("h1");
    let artistName = document.createElement("h2");
    let titles = document.querySelector(".titles");
    console.log(titles);

    playBtn.addEventListener("click", function() {
        audioElement.play();
    });

    pauseBtn.addEventListener("click", () => {
        audioElement.pause();
    });

    let myRadio = {
        // current: null,
        stations: {
            edm: {
                songs: [
                    {
                        title: "Innocent",
                        artist: "Alok & Yves V",
                        src: "audio/Alok&YvesV-Innocent.mp3"
                    },
                    {
                        title: "Clean Bandit",
                        artist: "Solo",
                        src: "audio/Clean_Bandit-SoloFeatDemiLovato.mp3"
                    },
                    {
                        title: "Ellie Goulding",
                        artist: "Demi Lovato",
                        src: "audio/Ellie_Goulding-CloseToMe.mp3"
                    },
                    {
                        title: "Marshmello ft Bastille",
                        artist: "Happier",
                        src: "audio/Marshmello_ft._Bastille-Happier.mp3"
                    },
                    {
                        title: "Rita Ora",
                        artist: "Let You Love Me",
                        src: "audio/Rita_Ora-Let_You_Love_Me.mp3"
                    },
                    {
                        title: "Chainsmokers",
                        artist: "This Feeling",
                        src: "audio/The_Chainsmokers-This_Feeling.mp3"
                    }
                ]
            },
            topHits: {
                songs: [
                    {
                        title: "NoBrainer",
                        artist: "DJKhaled",
                        src: "audio/DJKhaled-NoBrainer.mp3"
                    },
                    {
                        title: "Girls Like You",
                        artist: "Maroon 5",
                        src: "audio/Maroon5-GirlsLikeYouft.CardiB.mp3"
                    },
                    {
                        title: "Lucid Dreams",
                        artist: "Juice WRLD",
                        src: "audio/Juice_WRLD-LucidDreams.mp3"
                    },
                    {
                        title: "High Hopes",
                        artist: "Panic! At The Disco",
                        src: "audio/Panic-AtTheDiscoHighHopes.mp3"
                    },
                    {
                        title: "The Ballad of Hollis Brown",
                        artist: "Nina_Simone",
                        src: "audio/Nina_Simone-TheBalladofHollisBrown.mp3"
                    }
                ]
            },

            ballads: {
                songs: [
                    {
                        title: "By the Horns",
                        artist: "Julia Stone",
                        src: "audio/ByTheHorns.mp3"
                    },
                    {
                        title: "Hero",
                        artist: "Regina Spektor",
                        src: "audio/Hero.mp3"
                    },
                    {
                        title: "Precious Things",
                        artist: "Bic Runga",
                        src: "audio/PreciousThings.mp3"
                    },
                    {
                        title: "White Winter Hymnal",
                        artist: "Birdy",
                        src: "audio/WhiteWinterHymnal.mp3"
                    },
                    {
                        title: "Take It Easy",
                        artist: "Jetta",
                        src: "audio/TakeItEasy.mp3"
                    }
                ]
            },
            throwBacks: {
                songs: [
                    {
                        title: "Give Me One Reason",
                        artist: "Tracie Chapman",
                        src: "audio/GiveMeOneReason.m4a"
                    },
                    {
                        title: "Is You Is, Or Is You Ain't",
                        artist: "Dinah Washington",
                        src: "audio/Isyouisorisyouaintmybaby.mp3"
                    },
                    {
                        title: "Not Fade Away",
                        artist: "Florence and the Machine",
                        src: "audio/NotFadeAway.mp3"
                    },
                    {
                        title: "Please, Please, Please",
                        artist: "The Smiths",
                        src: "audio/PleasePleasePleaseLetMeGetWhatIWant.mp3"
                    }
                ]
            }
        }
    };
    // console.log(myRadio.stations[stationState]);
    let selectedStation = "edm";
    let songIndex = 0;
    let stationsSongsLength = myRadio.stations[selectedStation].songs.length;
    let currentSong = myRadio.stations[selectedStation].songs[songIndex].src;
    console.log(myRadio.stations[selectedStation].songs);

    function changeSongs() {
        if (songIndex === stationsSongsLength) {
            songIndex = 0;
        } else if (songIndex < 0) {
            songIndex = stationsSongsLength - 1;
        }
        audioElement.src =
            myRadio.stations[selectedStation].songs[songIndex].src;
        console.log("our console" + audioElement);
        audioElement.play();
    }

    nextBtn.addEventListener("click", () => {
        songIndex++;
        changeSongs();
        songInfo();
    });

    backBtn.addEventListener("click", () => {
        songIndex--;
        changeSongs();
        songInfo();
    });

    function changeStations(station) {
        selectedStation = station;
        songIndex = 0;
        audioElement.src =
            myRadio.stations[selectedStation].songs[songIndex].src;

        audioElement.play();
        songInfo();
    }

    function songInfo() {
        songTitle.innerHTML = `
        Title: ${myRadio.stations[selectedStation].songs[songIndex].title} <br>
        Artist: ${myRadio.stations[selectedStation].songs[songIndex].artist}`;

        titles.appendChild(songTitle, artistName);
    }

    station1.addEventListener("click", () => {
        changeStations("edm");
    });

    station2.addEventListener("click", () => {
        changeStations("topHits");
    });

    station3.addEventListener("click", () => {
        changeStations("ballads");
    });

    station4.addEventListener("click", () => {
        changeStations("throwBacks");
    });
    // myRadio.stations[selectedStation][songIndex];

    console.log(myRadio.stations[selectedStation]);
});
