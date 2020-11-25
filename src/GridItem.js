import React from 'react';

export default function GridItem({
  name,
  imgURL,
  origin,
  price,
  rating,
  isFavorite,
}) {
  return (
    <div className="grid-item">
      <h4 className="name">{name}</h4>
      <img src={imgURL} alt={name}></img>
      <p>price: ${price}</p>
      <p>origin: {origin}</p>
      <p>rating: {rating}</p>
      <button>Add to favorites</button>
      <button>Remove from favorites</button>
    </div>
  );
}
