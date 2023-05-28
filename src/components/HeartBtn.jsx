import React, { useState } from 'react';

const HeartButton = ({heart,item}) => {
  const [isLiked, setIsLiked] = useState(item.fav);

  const handleButtonClick = () => {
    setIsLiked(!isLiked)
    heart(item)
  };

  return (
    <button id='heart-btn' onClick={handleButtonClick}>
      {isLiked ? '❤️' : '🤍'}
    </button>
  );
};

export default HeartButton;