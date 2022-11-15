import React from 'react';
import './ImageView.css';

const ImageView = (props) => {
    return (
      <div className="box">
       <a href={props.imgsrcLarge}  target="_blank" rel="noopener noreferrer">
         <img className="banner" src={ props.imgsrcThumb } alt={props.imgdesc} />
       </a> 
      </div>
    );
  };

  export default ImageView;