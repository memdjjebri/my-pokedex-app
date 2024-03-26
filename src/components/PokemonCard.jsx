function PokemonCard() {
    return (
        <>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" />
            <figcaption>Bulbasaur</figcaption>
        </>
    );
}

export default PokemonCard;



const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

const PokemonCard = () => {
  
  const [pokemon, setPokemon] = useState(pokemonList[0]);

  
  const changePokemon = () => {
    setPokemon(pokemon === pokemonList[0] ? pokemonList[1] : pokemonList[0]);
  };

  return (
    <div>

      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      
      <figcaption>{pokemon.name}</figcaption>
      
      <button onClick={changePokemon}>Changer de Pokémon</button>
    </div>
  );
};

export default PokemonCard;
