import PokemonCard from './components/PokemonCard';

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

function App() {

  const pokemon = { name: "mew" };

  return (
    <div className="App">
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;
