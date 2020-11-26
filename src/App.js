import React from 'react';
import { fruits } from './fruits.json';
import Grid from './Grid';
import Favorites from './Favorites';
import Instructions from './Instructions';

export default function App() {
  return (
    <div className="app">
      <Instructions />
      <Favorites />
      <Grid data={fruits} />
    </div>
  );
}
