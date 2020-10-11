import React from 'react';
import './App.css';

import Comment from "./Comment/Comment";

const json = {
  info : {
    date: new Date().toLocaleDateString(),
    text: 'I hope you enjoy learning React!',
  },
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

function App() {
  return (
    <Comment info={json.info} author={json.author} />
  )
}

export default App;
