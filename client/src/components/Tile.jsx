import React from 'react';

export default function Tile({ letter, point }) {
  return (
    <div className='flex flex-col w-20 h-24 m-3 items-center rounded-md shadow-2xl border-t-4 border-b-8 border-r-8 border-gr border-yellow-500 bg-gradient-to-br from-yellow-400 to-yellow-300'>
      <h1 className='m-auto text-5xl font-serif font-semibold'>
        {letter}
        <sub className='text-xl font-sans'>{point}</sub>
      </h1>
    </div>
  );
}
