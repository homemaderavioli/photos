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

export default PhotoGrid