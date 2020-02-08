import React, { useState, useEffect } from 'react';
import querystring from 'query-string';
import io from 'socket.io-client';

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  useEffect(() => {
    const { name, room } = querystring.parse(location.search);
    console.log(name + ' ' + room);
    setName(name);
    setRoom(room);
  });
  return <h1>Chat</h1>;
};

export default Chat;
