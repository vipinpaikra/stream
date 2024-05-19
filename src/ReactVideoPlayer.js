import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

const convertGoogleDriveUrl = (url) => {
  const regex =
    /https:\/\/drive\.google\.com\/file\/d\/(.+)\/view\?usp=sharing/;
  const match = url.match(regex);
  if (match) {
    const fileId = match[1];
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  }
  return url;
};

const ReactVideoPlayer = () => {
  const [url, setUrl] = useState("");

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const resolvedUrl = convertGoogleDriveUrl(url);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter video URL"
        value={url}
        onChange={handleUrlChange}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          boxSizing: "border-box",
        }}
      />
      <PlayerWrapper>
        <StyledReactPlayer
          url={resolvedUrl}
          controls
          width="100%"
          height="100%"
          onError={() =>
            alert(
              "Error playing video. Please check the URL and sharing settings."
            )
          }
        />
      </PlayerWrapper>
    </div>
  );
};

export default ReactVideoPlayer;
