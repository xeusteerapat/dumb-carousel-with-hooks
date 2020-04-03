import React from 'react';

const Carousel = props => {
  const imgStyle = {
    height: '50%',
    width: '50%'
  };

  const { images, children, currentIndex } = props;

  return (
    <div>
      <h1>Carousel</h1>
      <img src={images[currentIndex]} alt="" style={imgStyle} />
      <div>{children}</div>
    </div>
  );
};

export default Carousel;
