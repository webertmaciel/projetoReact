import React from 'react'
import Header from './Header'
import './App.css';

function App() {
  return (
    <Header name="jose" links={["sobre", "comprar", "contato", "link", "etc"]}></Header>
  );
}

export default App;
