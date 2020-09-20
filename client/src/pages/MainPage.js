import React, { useState } from 'react';
import axios from 'axios';
import { calculateScore } from './../util/ScoreCalculator';
import Tiles from './../components/Tiles';
import Alert from './../components/Alert';

export default function MainPage() {
  const MAX_TILES = 10;
  const BASE_URL = 'http://localhost:5000/';
  const [letters, setLetters] = useState('');
  const [score, setScore] = useState(0);
  const [allEntries, setAllEntries] = useState([]);
  const [alertVisibility, setAlertVisibility] = useState('invisible');
  const [alertInfo, setAlertInfo] = useState({ type: '', message: '' });

  const API = axios.create({ baseURL: BASE_URL });

  const handleInputChange = (e) => {
    if (e.target.value.length <= MAX_TILES) {
      let word = e.target.value.toUpperCase();
      if (word.match(/^[A-Za-z]*$/)) {
        setLetters(word);
        setScore(calculateScore(word));
      }
    } else {
      displayAlert('Error', 'Max letter length reached');
    }
  };

  const saveEntry = () => {
    API.post('entries', { word: letters, score })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        displayAlert('Success', `Entry "${letters}" saved successfully.`);
      })
      .catch((err) => {
        if (err.response) {
          displayAlert('Error', err.response.data);
        } else {
          displayAlert('Error', err.toString());
        }
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

  const displayAlert = (alertType, message) => {
    setAlertInfo({ type: alertType, message });
    setAlertVisibility('visible');
    setTimeout(() => setAlertVisibility('invisible'), 3000);
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl mt-3 font-medium md:mt-5'>Score your scrabble</h1>
      <div className={`${alertVisibility} h-5`}>
        <Alert alertType={alertInfo.type} message={alertInfo.message} />
      </div>
      <Tiles letters={letters} maxLen={MAX_TILES} />
      <form>
        <input
          className='my-3 p-2 border border-gray-800 rounded-sm'
          type='text'
          value={letters}
          autoFocus
          onChange={(e) => handleInputChange(e)}
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
