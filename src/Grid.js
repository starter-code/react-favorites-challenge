import React from 'react';
import GridItem from './GridItem';

export default function Grid({ data }) {
  return (
    <div>
      <h1 className="centered">Fruits</h1>
      <div className="grid">
        {data.map((fruit, index) => (
          <GridItem {...fruit} key={index} />
        ))}
      </div>
    </div>
  );
}
