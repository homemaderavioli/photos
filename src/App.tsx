import React from 'react';
import './App.css';
import PhotoGrid from './Photo'

const App = () => {
  const BASE_IMAGES_URL = `${process.env.PUBLIC_URL}/assets/images`
  console.log(require.context(BASE_IMAGES_URL, false, /\.(jp?eg)$/));
  const PHOTOS:string[] = [
    `${BASE_IMAGES_URL}/DSC_0668.jpg`,
    `${BASE_IMAGES_URL}/DSC_0553.jpg`,
    `${BASE_IMAGES_URL}/DSC_0549.jpg`,
    `${BASE_IMAGES_URL}/DSC_0384.jpg`,
    `${BASE_IMAGES_URL}/darling-harbour.jpg`,
    `${BASE_IMAGES_URL}/door.jpg`,
    `${BASE_IMAGES_URL}/DSC_0016.jpg`,
  ];
  const INITIAL_INDEX = Math.floor(Math.random() * Math.floor(PHOTOS.length))

  return (
    <div className="App">
      <header className="App-header">
        <div className="title"><h1>photos</h1></div>
      </header>
      <PhotoGrid initialIndex={INITIAL_INDEX} photos={PHOTOS} />
    </div>
  );
}

export default App;
