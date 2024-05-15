
import "./App.css";
import VideoPlayer from "./VideoPlayer";
import { useRef } from "react";
import videojs from "video.js";
import ReactPlayer from 'react-player'

function App() {
  const playerRef = useRef(null);
  const videoLink = 'https://storage.googleapis.com/cropway_user_uploaded_files/For%20Cropway%20App/farm_equipments/big-buck.mp4'
  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "video/mp4",
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
  const googleDriveVideoUrl = 'https://storage.googleapis.com/cropway_user_uploaded_files/For%20Cropway%20App/farm_equipments/big-buck.mp4';
  return (
    <div>
      <h1>video player</h1>
      <VideoPlayer options={videoPlayerOptions}onReady={handlePlayerReady} />
     </div>
  );
}

export default App;
