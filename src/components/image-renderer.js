import React from "react";

import Gallery from "react-photo-gallery";
import ImageWithCaption from "./image-with-caption";

import { photos } from "./photos";

import "./picture-card.css";

export default function ImageRenderer() {
    const imageRenderer = ({ index, left, top, key, photo }) => (
        <ImageWithCaption
            key={key}
            margin={"2px"}
            index={index}
            photo={photo}
            left={left}
            top={top}
        />
    );

    return (
        <div className="App">
            <Gallery photos={photos} renderImage={imageRenderer}></Gallery>
        </div>
    );
}
