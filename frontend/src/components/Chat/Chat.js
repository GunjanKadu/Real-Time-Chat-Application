import React, { useState, useEffect } from 'react';
import querystring from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {
  //state
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  //socket
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const { name, room } = querystring.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, ({ error }) => {
      alert(error);
    });
  }, [ENDPOINT, location.search]);
  return <h1>Chat</h1>;
};

export default Chat;
