import React from 'react';
import GridItem from './GridItem';

export default function Grid({ data }) {
  return (
    <div className="grid">
      {data.map((fruit, index) => (
        <GridItem {...fruit} key={index} />
      ))}
    </div>
  );
}
