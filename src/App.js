import "./App.css";
import ReactVideoPlayer from "./ReactVideoPlayer";
import VideoPlayer from "./VideoPlayer";
import { useRef } from "react";
import videojs from "video.js";

function App() {
  const playerRef = useRef(null);
  const videoLink =
    "https://storage.googleapis.com/cropway_user_uploaded_files/For%20Cropway%20App/farm_equipments/big-buck.mp4";
  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "video/mp4",
        // type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will disose");
    });
  };
  const googleDriveVideoUrl =
    "https://storage.googleapis.com/cropway_user_uploaded_files/For%20Cropway%20App/farm_equipments/big-buck.mp4";
  return (
    <div>
      {/* <h1>video player</h1>
      <VideoPlayer options={videoPlayerOptions} onReady={handlePlayerReady} /> */}
      <div
        className="App"
        style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}
      >
        <h1>Responsive Video Player</h1>
        <ReactVideoPlayer />
      </div>
    </div>
  );
}

export default App;
