import React from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards'

function App() {
  return (
    <div className="App">
      {Navbar()}
      <div className="container">{Cards()}</div>
    </div>
  )
}

export default App;
