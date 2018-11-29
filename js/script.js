document.addEventListener("DOMContentLoaded", function(event) {
    var radioContainer = document.getElementById("radio");

    // creating new element and its attributes
    var audioElement = document.createElement("audio");
    var playBtn = document.getElementById("play");
    audioElement.class = "station";
    audioElement.controls = "controls";
    audioElement.src = "audio/Alok&YvesV-Innocent.mp3";
    // radioContainer.appendChild(audioElement);

    playBtn.addEventListener("click", function() {
        audioElement.play();
    });

    var myRadio = {
        current: null,
        stations: [
            {
                name: "edm",
                songs: [
                    {
                        title: "Innocent",
                        artist: "Alok & Yves V"
                    },
                    {
                        title: "Clean Bandit",
                        artist: "Solo"
                    },
                    {
                        title: "Ellie Goulding",
                        artist: "Demi Lovato"
                    },
                    {
                        title: "Marshmello ft Bastille",
                        artist: "Happier"
                    },
                    {
                        title: "Rita Ora",
                        artist: "Let You Love Me"
                    },
                    {
                        title: "Chainsmokers",
                        artist: "This Feeling"
                    }
                ]
            },
            {
                name: "Top Hit",
                songs: [
                    {
                        title: "Lucid Dreams",
                        artist: "Juice WRLD"
                    },
                    {
                        title: "No Brainer",
                        artist: "DJ Khaled"
                    },
                    {
                        title: "Girls Like You",
                        artist: "Maroon 5"
                    },
                    {
                        title: "High Hopes",
                        artist: "Panic! At The Disco"
                    }
                ]
            }
        ],

        change: function() {
            var station = this.stations[
                Math.floor(Math.random() * this.stations.length)
            ];
            var song =
                station.songs[Math.floor(Math.random() * station.songs.length)];
            this.currentStation = station;
            this.currentSong = song;
            console.log("Now Playing: " + song.title + " by " + song.artist);
        }
    };
    var x = myRadio.stations[0].songs[0];
    console.log(x);
    // radio.change();

    var stationState = "edm";

    var myRadio = {
        current: null,
        stations: {
            edm: {
                songs: [
                    {
                        title: "Innocent",
                        artist: "Alok & Yves V"
                    },
                    {
                        title: "Clean Bandit",
                        artist: "Solo"
                    },
                    {
                        title: "Ellie Goulding",
                        artist: "Demi Lovato"
                    },
                    {
                        title: "Marshmello ft Bastille",
                        artist: "Happier"
                    },
                    {
                        title: "Rita Ora",
                        artist: "Let You Love Me"
                    },
                    {
                        title: "Chainsmokers",
                        artist: "This Feeling"
                    }
                ]
            }
        },

        change: function() {
            var station = this.stations[
                Math.floor(Math.random() * this.stations.length)
            ];
            var song =
                station.songs[Math.floor(Math.random() * station.songs.length)];
            this.currentStation = station;
            this.currentSong = song;
            console.log("Now Playing: " + song.title + " by " + song.artist);
        }
    };
    console.log(myRadio.stations[stationState]);
});
