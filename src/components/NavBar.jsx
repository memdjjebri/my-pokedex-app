import React, { useState } from 'react';

function NavBar({pokemonList, handlePokemonClick}) {
    
    return <div className="navbar">
{pokemonList.map((pokemon, index) => (
    <button 
    key={index} 
    onClick={() => handlePokemonClick(pokemon)}>
    {pokemon.name}
  </button>
))}
    </div>;
}

export default NavBar;