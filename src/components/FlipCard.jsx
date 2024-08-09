import React from 'react';
import './FlipCard.css';

const FlipCard = ({ frontContent, backContent, backColor, imageSrc }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
         
          {frontContent}
        </div>
        <div className="flip-card-back" style={{ backgroundColor: backColor }}>
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
