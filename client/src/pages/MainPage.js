import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { calculateScore } from './../util/ScoreCalculator';
import Tiles from './../components/Tiles';
import Alert from './../components/Alert';
import { getAllEntries, saveEntry } from './../util/API';

export default function MainPage() {
  const MAX_TILES = 10;
  const [letters, setLetters] = useState('');
  const [score, setScore] = useState(0);
  const [alertVisibility, setAlertVisibility] = useState('invisible');
  const [alertInfo, setAlertInfo] = useState({ type: '', message: '' });

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

  const save = async () => {
    let { alertType, message } = await saveEntry({
      letters,
      score,
    });
    displayAlert(alertType, message);
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
      <h1 className='text-2xl'>Score : {score}</h1>
      <form>
        <input
          className='my-3 p-2 border border-gray-800 rounded-sm'
          type='text'
          value={letters}
          autoFocus
          onChange={(e) => handleInputChange(e)}
        ></input>
      </form>
      <div className='flex space-x-5'>
        <button
          className='w-20 h-8 rounded-md bg-pink-700 text-white'
          onClick={clear}
        >
          Clear
        </button>
        <button
          className='w-20 h-8 rounded-md bg-indigo-700 text-white'
          onClick={save}
        >
          Save
        </button>
        <Link to='view-all'>
          <button className='w-20 h-8 rounded-md bg-indigo-700 text-white'>
            View All
          </button>
        </Link>
      </div>
    </div>
  );
}
