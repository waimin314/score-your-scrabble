import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllEntries } from './../util/API';

export default function ViewAll() {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    const fetchEntries = async () => {
      setEntries(await getAllEntries());
    };
    fetchEntries();
  }, []);
  const renderTable = () => {
    return entries.map(({ word, score }, index) => {
      const color = index % 2 === 0 ? 'bg-white' : 'bg-gray-300';
      return (
        <tr className={`${color}`}>
          <td className='border border-gray-700 px-4 py-2'>{word}</td>
          <td className='border border-gray-700 px-4 py-2'>{score}</td>
        </tr>
      );
    });
  };
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex justify-center my-5 overflow-scroll h-auto'>
        <table className='table-fixed'>
          <thead>
            <tr className='bg-teal-300 text-gray-800'>
              <th className='w-1/2 border border-gray-700 px-4 py-2'>Word</th>
              <th className='w-1/3 border border-gray-700 px-4 py-2'>Score</th>
            </tr>
          </thead>
          <tbody className='odd:bg-gray-200'>{renderTable()}</tbody>
        </table>
      </div>
      <Link to='/'>
        <button className='w-20 h-8 rounded-md bg-pink-700 text-white'>
          Back
        </button>
      </Link>
    </div>
  );
}
