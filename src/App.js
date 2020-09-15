import React, { useState } from 'react';

function App() {
  const MAX_TILES = 10;
  const [letters, setLetters] = useState('');

  const handleChange = (e) => {
    if (e.target.value.length <= MAX_TILES) {
      setLetters(e.target.value.toUpperCase());
    } else {
      console.log('Max Limit reached');
    }
  };

  return (
    <div className='flex flex-col items-center '>
      <h1 className='h-10 mt-10 text-2xl'>{letters}</h1>
      <form>
        <input
          className='my-3 p-2'
          type='text'
          value={letters}
          autoFocus
          onChange={(e) => handleChange(e)}
        ></input>
      </form>
      <div className='flex space-x-5'>
        <button
          className='w-20 h-8 rounded-md bg-pink-700 text-white'
          onClick={() => setLetters('')}
        >
          Clear
        </button>
        <button className='w-20 h-8 rounded-md bg-indigo-700 text-white'>
          Save
        </button>
        <button className='w-20 h-8 rounded-md bg-indigo-700 text-white'>
          View All
        </button>
      </div>
    </div>
  );
}

export default App;
