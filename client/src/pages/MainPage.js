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
  const [inputWiggle, setInputWiggle] = useState('');

  const handleInputChange = (e) => {
    if (e.target.value.length <= MAX_TILES) {
      let word = e.target.value.toUpperCase();
      if (word.match(/^[A-Za-z]*$/)) {
        setLetters(word);
        setScore(calculateScore(word));
      }
    } else {
      wiggleInput();
      displayAlert('Error', 'Max letter length reached');
    }
  };

  const save = async () => {
    let { alertType, message } = await saveEntry({
      letters,
      score,
    });
    if (alertType === 'Error') wiggleInput();
    displayAlert(alertType, message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    save();
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

  const wiggleInput = () => {
    setInputWiggle('animate-wiggle');
    setTimeout(() => {
      setInputWiggle('');
    }, 500);
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl mt-3 font-medium md:mt-5'>Score your scrabble</h1>
      <div className={`${alertVisibility} h-5`}>
        <Alert alertType={alertInfo.type} message={alertInfo.message} />
      </div>
      <Tiles letters={letters} maxLen={MAX_TILES} />
      <div className='flex justify-between px-8 w-full space-x-10 mt-5 mb-3 md:w-auto md:justify-around'>
        <h1 className='text-2xl'>Score : {score}</h1>
        <Link to='view-all'>
          <button className='w-24 h-10 rounded-md bg-gradient-to-br from-indigo-700 to-indigo-600 text-white text-xl shadow-lg'>
            View All
          </button>
        </Link>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className='flex justify-center w-full px-8 mb-3 md:mb-5'
      >
        <input
          className={`my-3 p-2 w-full border border-gray-800 rounded-sm ${inputWiggle} md:w-56`}
          type='text'
          value={letters}
          autoFocus
          onChange={(e) => handleInputChange(e)}
        ></input>
      </form>
      <div className='flex justify-between w-full px-8 space-x-8 md:w-auto  md:justify-around'>
        <button
          className='w-24 h-10 rounded-md bg-gradient-to-br from-pink-700 to-pink-600 text-white text-xl shadow-lg'
          onClick={clear}
        >
          Clear
        </button>
        <button
          className='w-24 h-10 rounded-md bg-gradient-to-br from-indigo-700 to-indigo-600 text-white text-xl shadow-lg'
          onClick={save}
        >
          Save
        </button>
      </div>
    </div>
  );
}
