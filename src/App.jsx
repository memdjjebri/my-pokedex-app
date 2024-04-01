import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
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
    <div className="navbar">
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar pokemonIndex={pokemonIndex} pokemonList={pokemonList} handleClickNext={handleClickNext} handleClickPrevious={handleClickPrevious} />
    </div>
  );
}

export default App;