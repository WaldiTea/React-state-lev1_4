import React, { useState } from 'react';
import './emoji.css';

const ChangeMood = () => {
  const [mood, setMood] = useState(true);

  return (
    <div className='div'>
      <p className='emoji'>{mood ? '😐' : '😀'}</p>
      <button onClick={() => setMood(!mood)}>Change mood</button>
    </div>
  );
}

export default ChangeMood;