import React, { useState } from 'react';
import Carousel from './components/Carousel';
import './App.css';

const images = [
  'https://images.unsplash.com/photo-1493406300581-484b937cdc41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1948&q=80',
  'https://images.unsplash.com/photo-1511694009171-3cdddf4484ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImg = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextImg = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="App">
      <h1>Image Carousel</h1>
      <Carousel images={images} currentIndex={currentIndex}>
        <button onClick={prevImg}>Previous</button>
        <button onClick={nextImg}>Next</button>
      </Carousel>
    </div>
  );
};

export default App;
