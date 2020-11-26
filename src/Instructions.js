import React from 'react';

export default function Instructions() {
  return (
    <div className="instructions">
      <h3>Modify this code with the following criteria:</h3>
      <ul>
        <li>A user can click the plus button to add fruits to a favorites</li>
        <li>A user can click the minus to remove fruits to a favorites</li>
        <li>Favorited fruits should appear in the Favorites container</li>
        <li>If fruit is in not in favorites, hide the minus button</li>
        <li>If fruit is in favorites, hide the plus button</li>
        <li>The element its favorites should be the same as the GridItem</li>
      </ul>
    </div>
  );
}
