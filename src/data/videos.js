import music from "../assets/audios/music.mp3";
import grateful from "../assets/audios/grateful.mp3";
import destiny from "../assets/audios/destiny.mp3";
import home from "../assets/audios/home.mp3";
import lmlud from "../assets/audios/love-me-like-u-do.mp3";
import loveN from "../assets/audios/love-Nwantiti.mp3";

class Video {
    constructor(music, name, type) {
        this.music = music;
        this.name = this.capitalize(name);
        this.type = type;
    }

    capitalize(str) {
        const upperFirstLetter = str.charAt(0).toUpperCase();
        const lowerRestPhrase = str.slice(1).toLowerCase();
        return upperFirstLetter + lowerRestPhrase;
    }
}

class AllVideos {
    constructor(){
        this.videos = []
    }

    add(Video) { this.videos.push(Video) }

    orderVideos() {
        this.videos.sort((a,b) => {
            return b.type > a.type
            ? -1
            : b.type < a.type
            ? 1
            : b.name > a.name
            ? -1
            : b.name < a.name
            ? 1
            : 0;
        })
    }
}

const guitarMix = new Video(music, "guitar mix", "relax")
const homeSong = new Video(home, "home", "lyrics")
const gratefulSong = new Video(grateful, "grateful", "instrumental")
const lmludSong = new Video(lmlud, "Love me like you do", "lyrics")
const destinySong = new Video(destiny, "destiny", "instrumental")
const loveNSong = new Video(loveN, "love Nwantiti slow and reverb", "relax")


const myVideos = new AllVideos()
myVideos.add(guitarMix)
myVideos.add(homeSong)
myVideos.add(gratefulSong)
myVideos.add(lmludSong)
myVideos.add(destinySong)
myVideos.add(loveNSong)

myVideos.orderVideos()


export default myVideos.videos;
