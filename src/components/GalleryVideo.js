import Video from "./Video";
import videos from "../data/videos"

const GalleryVideo = () => {
    return (
        <ul className="columns">
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
