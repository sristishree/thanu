import React from "react";

const cont = {
    backgroundColor: "#eee",
    overflow: "hidden",
    position: "relative"
};

const ImageWithCaption = ({ index, photo, margin, direction, top, left }) => {
    return (
        <div className="image-container" >
            <img src={photo.src} height={photo.height} width={photo.width} alt="" />
            <div className="image-caption">
                <div className="overlay-text">{photo.caption}</div>
            </div>
        </div>
    );
};

export default ImageWithCaption;