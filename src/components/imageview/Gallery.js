import React from 'react';
import './Gallery.css';

const Gallery = (props) => {
    return (
        <div className="wrapper">
            {props.children}
        </div>
    );
  };

  export default Gallery;