import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './textcontainer.css';

const TextContainer = ({ users }) => (
  <div className='textContainer'>
    <div>
      <h1>
        Realtime Chat Application{' '}
        <span role='img' aria-label='emoji'>
          💬
        </span>
      </h1>
      <h2>
        <a className='name' href='https://github.com/GunjanKadu'>
          Created By Gunjan Kadu
        </a>{' '}
        <span role='img' aria-label='emoji'>
          ❤️
        </span>
      </h2>
    </div>
    {users ? (
      <div>
        <h1>People currently chatting:</h1>
        <div className='activeContainer'>
          <h2>
            {users.map(({ name }) => (
              <div key={name} className='activeItem'>
                <img
                  alt='Online Icon'
                  src={onlineIcon}
                  style={{ padding: '20px' }}
                />
                {name.toUpperCase()}
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
