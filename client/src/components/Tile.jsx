import React from 'react';

export default function Tile({ letter, point }) {
  return (
    <div className='flex flex-col w-12 h-16 m-3 items-center rounded-md shadow-2xl border-t-2 border-r-4 border-b-4 border-yellow-500 bg-gradient-to-br from-yellow-400 to-yellow-300 md:w-20 md:h-24 md:rounded-md md:border-t-4 md:border-b-8 md:border-r-8'>
      <h1 className='m-auto text-3xl font-serif font-semibold md:text-5xl'>
        {letter}
        <sub className='text-sm font-sans md:text-xl'>{point}</sub>
      </h1>
    </div>
  );
}
