import React from 'react'
import Header from './Header'
import Counter from './Counter'
import './App.css';

function App() {
  return (
    <div>
      <Header name="jose" links={["sobre", "comprar", "contato", "link", "etc"]}></Header>
      <Counter count={5}></Counter>
    </div>
  );
}

export default App;
