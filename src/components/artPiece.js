import React from 'react';
import '../styling/artPiece.module.scss';
const ArtPiece = props => {
    const { name, location, image } = props;
    return (
      <div className='piece'>
        <p>{name}</p>
        <p>{location}</p>
        <img src={image} alt={name,location} />
      </div>
    );
  };
export default ArtPiece;
  