import React from 'react';
import Tile from './Tile';
import PlaceholderTile from './PlaceholderTile';
import { getPointOf } from './../util/ScoreCalculator';

export default function Tiles({ letters, maxLen }) {
  const renderTiles = () => {
    return letters.split('').map((letter) => {
      return <Tile letter={letter} point={getPointOf(letter)} />;
    });
  };

  const renderPlaceholderTiles = () => {
    let tmpTiles = [];
    let numTilesToRender = maxLen - letters.length;

    for (let i = 0; i < numTilesToRender; i++) {
      tmpTiles.push(<PlaceholderTile />);
    }

    return tmpTiles;
  };
  return (
    <div className='flex flex-wrap flex-row h-auto  my-1 justify-center max-w-sm md:my-8 md:max-w-xl lg:max-w-full lg:flex-no-wrap'>
      {renderTiles()}
      {renderPlaceholderTiles()}
    </div>
  );
}
