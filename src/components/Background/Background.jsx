import React from "react";
import video1 from "../../assets/video1.mp4";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const Background = ({ heroCount, playStatus }) => {
  if (playStatus) {
    return (
      <video className="h-full w-full float-left top-0 left-0 right-0 bottom-0 p-0 fixed object-cover -z-10" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img className="h-full w-full float-left top-0 left-0 right-0 bottom-0 p-0 fixed object-cover -z-10"  src={image1} alt="" />;
  } else if (heroCount === 1) {
    return <img className="h-full w-full float-left top-0 left-0 right-0 bottom-0 p-0 fixed object-cover -z-10"  src={image2} alt="" />;
  }
    else if (heroCount === 2) {
    return <img className="h-full w-full float-left top-0 left-0 right-0 bottom-0 p-0 fixed object-cover -z-10"  src={image3} alt="" />;
  }
};

export default Background;
