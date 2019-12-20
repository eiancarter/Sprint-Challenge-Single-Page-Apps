import React, { useState, useEffect } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";


export default function SearchForm() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log('you have never seen Rick and Morty');
      })
    const results = characters.filter(character => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase())
    });
    setSearchResults(results);
  }, [searchTerm, characters]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="search-form">
      <form>
        <label htmlFor='name'>Search:</label>
        <input 
          id='name' 
          type='text' 
          name='textfield' 
          placeholder='search for character' 
          value={searchTerm} 
          onChange={handleChange} />
      </form>
      <div className='character-list'>
        <ul>
          {searchResults.map(character => (
              <CharacterCard name={character.name} status={character.status} />
          ))}
        </ul>
      </div>
    </section>
  );
}
