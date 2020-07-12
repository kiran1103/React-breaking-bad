import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Characters from './components/Characters/Characters';

function App() {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (isLoading) setLoading(true);
    axios.get(`https://www.breakingbadapi.com/api/characters?name=${term}`)
      .then(response => {
        setCharacters(response.data);
        setLoading(false)
      })
  }, [term]);

  return (
    <div className="App">
      <Header />
      <Search onSearch={(term) => setTerm(term)} />
      <Characters characters={characters} loading={isLoading} />
    </div>
  );
}

export default App;
