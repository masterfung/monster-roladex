import React, {useState, useEffect} from 'react';
import CardList from './components/CardList/CardList';
import SearchBar from './components/Search/Search';

import './App.css';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect( () => {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => setMonsters(users));

  }, []);

  const handleChange = (e) => setSearchVal(e.target.value.toLowerCase())

  const filteredResults = monsters.filter(monster => monster.name.toLowerCase().includes(searchVal));

  return (
    <div className="App">
      <h1 className="title">Monsters Roladex</h1>
      <SearchBar placeholder="search monsters" handleChange={ handleChange } />

      <CardList monsters={filteredResults} />
    </div>
  );
}

export default App;
