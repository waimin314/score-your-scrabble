import React, { useState } from 'react';
import axios from 'axios';
import { calculateScore, getPointOf } from './util/ScoreCalculator';
import Tile from './components/Tile';
import PlaceholderTile from './components/PlaceholderTile';

function App() {
  const MAX_TILES = 10;
  const BASE_URL = 'http://localhost:5000/';
  const [letters, setLetters] = useState('');
  const [score, setScore] = useState(0);
  const [allEntries, setAllEntries] = useState([]);

  const API = axios.create({ baseURL: BASE_URL });

  const handleChange = (e) => {
    if (e.target.value.length <= MAX_TILES) {
      let word = e.target.value.toUpperCase();
      setLetters(word);
      setScore(calculateScore(word));
    } else {
      console.log('Max Limit reached');
    }
  };

  const renderTiles = () => {
    return letters.split('').map((letter) => {
      return <Tile letter={letter} point={getPointOf(letter)} />;
    });
  };

  const renderPlaceholderTiles = () => {
    let tmpTiles = [];
    let numTilesToRender = MAX_TILES - letters.length;

    for (let i = 0; i < numTilesToRender; i++) {
      tmpTiles.push(<PlaceholderTile />);
    }

    return tmpTiles;
  };

  const saveEntry = () => {
    API.post('entries', { word: letters, score }).then((res, err) => {
      console.log(res);
      console.log(res.data);
    });
  };

  const getAllEntries = () => {
    API.get('entries').then((res, err) => {
      console.log(res.data);
      setAllEntries(res.data);
    });
  };

  const renderAllEntries = () => {
    return allEntries.map((entry) => {
      console.log(`${entry.word} : ${entry.score}`);
      return (
        <li>
          {entry.word} : {entry.score}
        </li>
      );
    });
  };

  const clear = () => {
    setLetters('');
    setScore(0);
  };

  return (
    <div className='flex flex-col items-center '>
      {/* <h1 className='h-10 mt-10 text-2xl'>{letters}</h1> */}
      <div className='flex flex-wrap flex-row h-auto mt-16 mb-10 justify-center max-w-sm  md:max-w-xl lg:max-w-full lg:flex-no-wrap'>
        {renderTiles()}
        {renderPlaceholderTiles()}
      </div>
      <form>
        <input
          className='my-3 p-2 border border-gray-800 rounded-sm'
          type='text'
          value={letters}
          autoFocus
          onChange={(e) => handleChange(e)}
        ></input>
      </form>
      <h1 className='text-2xl my-5'>Score : {score}</h1>
      <div className='flex space-x-5'>
        <button
          className='w-20 h-8 rounded-md bg-pink-700 text-white'
          onClick={clear}
        >
          Clear
        </button>
        <button
          className='w-20 h-8 rounded-md bg-indigo-700 text-white'
          onClick={saveEntry}
        >
          Save
        </button>
        <button
          className='w-20 h-8 rounded-md bg-indigo-700 text-white'
          onClick={getAllEntries}
        >
          View All
        </button>
      </div>
      <div className='block mx-auto mt-5'>{renderAllEntries()}</div>
    </div>
  );
}

export default App;
