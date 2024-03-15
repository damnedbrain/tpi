import React from 'react';

const VideoComponent = ({ videoSrc, videoTitle, ...props }) => (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    );
export default VideoComponent;