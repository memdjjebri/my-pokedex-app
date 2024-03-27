const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  
  function PokemonCard() {
    const pokemon=pokemonList[1];
    const noImg="???"
    console.log(pokemon);
      return <>
        {pokemon.imgSrc!==undefined? <img src={pokemon.imgSrc}/> : <p>{noImg}</p>}
        <figcaption>{pokemon.name}</figcaption>
      </>;
    }
    
    export default PokemonCard;