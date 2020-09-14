import React, { useState } from 'react';
import './App.css';

function App() {
  const MAX_TILES = 10;
  const [letters, setLetters] = useState('');

  const handleChange = (e) => {
    if (e.target.value.length <= MAX_TILES) {
      setLetters(e.target.value);
    } else {
      console.log('Max Limit reached');
    }
  };

  return (
    <div>
      <h1>{letters}</h1>
      <form>
        <input
          type='text'
          value={letters}
          autoFocus
          onChange={(e) => handleChange(e)}
        ></input>
        <button onClick={() => setLetters('')}>Clear</button>
        <button>Save</button>
        <button>View All</button>
      </form>
    </div>
  );
}

export default App;
