import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllEntries } from './../util/API';

export default function ViewAll() {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    const fetchEntries = async () => {
      const data = await getAllEntries()
      setEntries(data);
    };
    fetchEntries();
  }, []);
  const renderTable = () => {

    if (entries.length===0){
      return (<div className='flex my-2' >
        <div class="animate-spin mx-2 border-r-0 border-b-0 border-t-0 w-5 h-5 border-4 border-teal-600 rounded-full"></div> Loading...</div>)     
    }
    else {

    if (!Array.isArray(entries)) {
      return <h1 className='text-xl text-red-400'>{entries.message}</h1>;
    }
    return entries.map(({ word, score }, index) => {
      const color = index % 2 === 0 ? 'bg-white' : 'bg-gray-300';
      return (
        <tr className={`${color}`}>
          <td className='border border-gray-700 px-4 py-2'>{word}</td>
          <td className='border border-gray-700 px-4 py-2'>{score}</td>
        </tr>
      );
    });
  }
};
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex justify-center my-5 h-auto overflow-y-auto'>
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
        <button className='w-24 h-10 rounded-md bg-gradient-to-br from-pink-700 to-pink-600 text-white shadow-lg'>
          Back
        </button>
      </Link>
    </div>
  );
}
