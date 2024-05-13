import logo from "./logo.svg";
import "./App.css";
import VideoPlayer from "./VideoPlayer";
import { useRef } from "react";
import videojs from "video.js";

function App() {
  const playerRef = useRef(null);
  const videoLink =
    "http://localhost:8000/uploads/courses/853ec075-4764-4605-a56c-7aec19bae5ad/index.m3u8";

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL",
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

  return (
    <div>
      <h1>vidoe player</h1>
      <VideoPlayer options={videoPlayerOptions} onReady={handlePlayerReady} />
    </div>
  );
}

export default App;
