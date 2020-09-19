import React, { useState } from 'react';
import { calculateScore } from './util/ScoreCalculator';
import axios from 'axios';

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

  return (
    <div className='flex flex-col items-center '>
      <h1 className='h-10 mt-10 text-2xl'>{letters}</h1>
      <form>
        <input
          className='my-3 p-2 border border-gray-800 rounded-sm'
          type='text'
          value={letters}
          autoFocus
          onChange={(e) => handleChange(e)}
        ></input>
      </form>
      <h2>Score : {score}</h2>
      <div className='flex space-x-5'>
        <button
          className='w-20 h-8 rounded-md bg-pink-700 text-white'
          onClick={() => setLetters('')}
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
      <div>{renderAllEntries()}</div>
    </div>
  );
}

export default App;
