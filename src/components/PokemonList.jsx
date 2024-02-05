import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => { //recibe arreglo
  return (
    <div className='PokemonList'>
      {pokemons.map((pokemon) => { //creo una tarjeta para cada pokemon
       return (
        <PokemonCard
          name={pokemon.name}
          key={pokemon.name}  //El atributo key={pokemon.name} es importante en listas de React para ayudar al algoritmo de reconciliación de React a identificar qué elementos han cambiado, agregado, o eliminado.
          image={pokemon.sprites.front_default}
          types={pokemon.types}
          id={pokemon.id}
          favorite={pokemon.favorite} //envio el booleano de favorito
        />
      );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''), //mock de arreglo vacio ['',''..]
};

export default PokemonList;