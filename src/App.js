import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards'

function App() {

      const [data, setData] = useState([]);
      const [error, setError] = useState(null);
      const [filteredChar, setFilteredChar] = useState(null);


  useEffect(() => { 
      const fetchTryCatch = async() => {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const result = await response.json();
        setData(result.results);
        const data = result.results;
        console.log('data :>> ', data);
      } catch (error) {
        console.log("Catch:>> ", error);
        setError(error)
      }
    }

    fetchTryCatch();
  }, []);

  return (
    <div className="App">
      <Navbar data={data} setFilteredChar={setFilteredChar} filteredChar={filteredChar}/>
      <Cards data={data} filteredChar={filteredChar} />
    </div>
  )
}
export default App;
