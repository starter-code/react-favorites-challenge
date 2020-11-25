import React from 'react';
import { fruits } from './fruits.json';
import Grid from './Grid';
import Favorites from './Favorites';

export default function App() {
  return (
    <div className="App">
      <div className="instructions">
        <h3>Modify this code with the following criteria:</h3>
        <ul>
          <li>A user can click on a button to add fruits to a favorites</li>
          <li>A user can click on a button to remove fruits to a favorites</li>
        </ul>
      </div>
      <Favorites />
      <Grid data={fruits} />
    </div>
  );
}
