import React from 'react';
import "../componentStyles.css";

const TaichiVideo = () => {
    return (
        <>
        <div className="video-responsive">
            <h2 className="header2">
                <span className="HomeTitle">Video</span>
                <div className="homeHorizontalLine"></div>
            </h2>
            <iframe
                width="853"
                height="480"
                src='https://www.youtube.com/embed/cEOS2zoyQw4'
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
        </>
    )
}

export default TaichiVideo;