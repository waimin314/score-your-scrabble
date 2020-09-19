import React from 'react';

export default function Alert({ alertType, message }) {
  const color =
    alertType === 'Success'
      ? 'bg-green-100 border-green-400 text-green-700'
      : 'bg-red-100 border-red-400 text-red-700';

  return (
    <div className={`border ${color} px-4 py-3 rounded relative mt-3`}>
      <strong className='font-bold'>{alertType}! </strong>
      <span className='block sm:inline'> {message}</span>
    </div>
  );
}
