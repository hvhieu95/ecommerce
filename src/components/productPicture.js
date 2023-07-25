import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import Picture1 from "../image/picture1.png";
import Picture2 from "../image/picture2.png";
import Picture3 from "../image/picture3.png";
import Picture4 from "../image/picture4.png";

export function ProductPicture() {
  const [currentImage, setCurrentImage] = useState(Picture1);
  return (
    <div className="productpicture">
       <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Current Image",
            isFluidWidth: true,
            src: currentImage,
          },
          largeImage: {
            src: currentImage,
            width: 1200,
            height: 1800,
          },
        }}
        
      />
      <div className="pictureContainer">
        <img
          src={Picture1}
          alt="picture1"
          className="picture"
          onClick={() => setCurrentImage(Picture1)}
        />
        <img
          src={Picture2}
          alt="picture2"
          className="picture"
          onClick={() => setCurrentImage(Picture2)}
        />
        <img
          src={Picture3}
          alt="picture3"
          className="picture"
          onClick={() => setCurrentImage(Picture3)}
        />
        <img
          src={Picture4}
          alt="picture4"
          className="picture"
          onClick={() => setCurrentImage(Picture4)}
        />
      </div>
    </div>
  );
}