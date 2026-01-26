import video from "../assets/vidoes/bg.mp4";

function DivVideo() {
    return (
        <video
            id="myVideo"
            autoPlay
            muted
            loop
            playsInline
        >
            <source src={video} type="video/mp4" />
        </video>
    );
}

export default DivVideo;
