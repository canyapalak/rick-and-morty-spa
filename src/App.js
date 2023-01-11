import React from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards'
import Modals from './components/Modals';

function App() {
  return (
    <div className="App">
      {Navbar()}
      <div className="container">{Cards()}</div>
      <Modals />
    </div>
  )
}

export default App;
