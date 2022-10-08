import music from "../assets/audios/music.mp3";
import grateful from "../assets/audios/grateful.mp3";
import destiny from "../assets/audios/destiny.mp3"
import destinyLyrics from "../assets/audios/destiny-lyrics.mp3"
import gratefulLyrics from "../assets/audios/grateful-lyrics.mp3";
import home from "../assets/audios/home.mp3";
import myMind from "../assets/audios/my-mind.mp3";
import lmlud from "../assets/audios/love-me-like-u-do.mp3";

class Video{
    constructor(music, name, type){
        this.music = music
        this.name = `${name} ${type}`
        this.type = type
    }
}

const videos = [
    new Video( music, "guitar music", "relax" ),
    new Video( gratefulLyrics, "grateful music", "lyrics" ),
    new Video( destinyLyrics, "destiny music", "lyrics" ),
    new Video( home, "home music", "lyrics" ),
    new Video( myMind, "my mind music", "lyrics" ),
    new Video( lmlud, "Love me like you do music", "lyrics" ),
    new Video( grateful, "grateful music", "instrumental" ),
    new Video( destiny, "destiny music", "instrumental" ),
]

export default videos;