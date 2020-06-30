import React from 'react';
import './App.css';

type PhotoProps = {
  url: string;
  alt: string;
};

class Photo extends React.PureComponent<PhotoProps> {
  render = () => (
    <div className="Photo"><img src={this.props.url} alt={this.props.alt}></img></div>
  );
}

type PhotoGridProps = {
  initialIndex: number,
  photos: string[],
};

type PhotoGridState = {
  photoIndex: number,
};

class PhotoGrid extends React.Component<PhotoGridProps, PhotoGridState> {
  state: PhotoGridState = {
    photoIndex: this.props.initialIndex,
  };

  render = () => {
    return (
      <div className="PhotoGrid">
        <Photo url={this.props.photos[this.state.photoIndex]} alt="alt" />
        <div className="prev" onClick={() => this.prev(this.props.photos.length)}></div>
        <div className="next" onClick={() => this.next(this.props.photos.length)}></div>
      </div>
    );
  }

  next = (len: number): void => {
    this.setState((state => ({
      photoIndex: (state.photoIndex + 1) % len,
    })));
  };

  prev = (len: number): void => {
    this.setState((state => ({
      photoIndex: state.photoIndex - 1 < 0 ? (len - 1) : state.photoIndex - 1,
    })));
  };
}

const App = () => {
  const photos:string[] = [
    "pics/DSC_0668.jpg",
    "pics/DSC_0553.jpg",
    "pics/DSC_0549.jpg",
    "pics/DSC_0384.jpg",
    "pics/darling-harbour.jpg",
    "pics/door.jpg",
    "pics/DSC_0016.jpg",
  ];
  const intitialIndex = Math.floor(Math.random() * Math.floor(photos.length))

  return (
    <div className="App">
      <header className="App-header">
        <div className="title"><h1>photos</h1></div>
        <div className="menu"><ul><li></li></ul></div>
      </header>
      <PhotoGrid
        initialIndex={intitialIndex}
        photos={photos}
      />
    </div>
  );
}

export default App;
