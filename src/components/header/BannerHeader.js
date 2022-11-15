import React from "react";
import "./BannerHeader.css";
import bannerImage from "../header/blue-neon.jpg";
import DigitalClock from "../clock/DigitalClock";
import WeatherInfoHKO from "../weatherinfo/WeatherInfoHKO";

const BannerHeader = () => {
  return (
    <div className="bannerHeader">
      <img className="banner" src={bannerImage} alt="hello" />

      <div style={{display: "flex", flexDirection: "row","justifyContent": "space-between" }} >
        <span>
          <WeatherInfoHKO />
        </span>
        <span>
          <DigitalClock />
        </span>
      </div>
    </div>
  );
};

export default BannerHeader;
