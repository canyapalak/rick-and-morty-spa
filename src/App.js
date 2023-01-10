import React from 'react';
import Navbar from './components/Navbar';
import CreateCards from './components/CreateCards';

function App() {
  return (
    <div className="App">
          {Navbar()}
          {CreateCards()}
    </div>
  )
}

export default App;
