import React from 'react';
import "./BannerHeader.css";
import bannerImage from '../header/banner-1920.jpg';
import DigitalClock from '../clock/DigitalClock';

const BannerHeader = () => {
  return (
    <div className="bannerHeader">
     <div>
       <img className="banner" src={bannerImage} alt="hello" />
     </div> 
     <DigitalClock/>
    </div>
  );
};
export default BannerHeader;
