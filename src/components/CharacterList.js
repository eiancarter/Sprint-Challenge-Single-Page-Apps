import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
    const [characters, setCharacters] = useState([]);
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    useEffect(() => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          console.log(response);
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.log('you have never seen Rick and Morty');
        })
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => {
        return (
          <CharacterCard key={character.id} name={character.name} status={character.status}/>
        )
      })}
    </section>
  );
}
