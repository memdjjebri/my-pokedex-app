import PokemonCard from "./components/PokemonCard";
import "./App.css";
import React, { useState } from 'react';

const pokemonList = [

  {

    name: "bulbasaur",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",

  },

  {

    name: "charmander",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",

  },

  {

    name: "squirtle",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",

  },

  {

    name: "pikachu",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",

  },

  {

    name: "mew",

  },

];

function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);

  const handleClickNext = () => {
    setpokemonIndex(pokemonIndex + 1)
  }

  const handleClickPrevious = () => {
    setpokemonIndex(pokemonIndex - 1)
  }
  return (
    <>      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex > 0 ? <button onClick={handleClickPrevious}> Précédent </button> : ""}
      {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickNext}> Suivant </button> : ""}
    </>
  );
}

export default App;