import videos from "../data/videos";
import Video from "./Video";
import "../styles/GalleryVideo.css";

const GalleryVideo = () => {
    return (
        <ul className="grid">
            {videos.map((obj, index) => {
                return (
                    <li key={index}>
                        <Video
                            music={obj.music}
                            name={obj.name}
                            type={obj.type}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default GalleryVideo;
