import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {

    return <figure className="card">
        {pokemon.imgSrc === undefined ? <p> "???" </p> : <img src= {pokemon.imgSrc} className="card-img" alt={pokemon.name}/>}
        <figcaption> {pokemon.name} </figcaption>
    </figure>;
}

PokemonCard.propTypes = {
pokemon: PropTypes.shape ({
 name: PropTypes.string.isRequired,
 imgSrc: PropTypes.string,    
}).isRequired,
  }

export default PokemonCard; 