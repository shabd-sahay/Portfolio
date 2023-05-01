import React, { useState } from 'react';
import './Skills.css';

function Skills(props) {
  const { cards } = props;
  return (
    <div className='row bazz'>
      <h1 className='fa'>SKILLS</h1>
      {cards.map(card => (
        <div className='col-12' key={card.id}>
          <div className="card-container card-body d-flex justify-content-center">
            <div className="card">
              <h2 className='card-title fa'>{card.title}</h2>
              <p className='card-text'>{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;