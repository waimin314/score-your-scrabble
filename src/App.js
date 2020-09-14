import React, { useState } from 'react';
import './App.css';

function App() {
  const [letters, setLetters] = useState('');

  return (
    <div>
      <h1>{letters}</h1>
      <form>
        <input
          type='text'
          autoFocus
          onChange={(e) => setLetters(e.target.value)}
        ></input>
      </form>
    </div>
  );
}

export default App;
