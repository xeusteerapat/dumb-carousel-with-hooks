import React from 'react';

const Carousel = props => {
  const imgStyle = {
    height: '60%',
    width: '60%'
  };

  const { images, children, currentIndex } = props;

  return (
    <div>
      <img src={images[currentIndex]} alt="" style={imgStyle} />
      <div>{children}</div>
    </div>
  );
};

export default Carousel;
