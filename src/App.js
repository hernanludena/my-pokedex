import { useEffect } from 'react';
import { Col, Spin } from 'antd';  //Permite manejar el Grid - Maquetado
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import './App.css';

function App() {

  //accedo al estado global: arreglo de pokemones
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  //shallowEqual, se utiliza para optimizar el rendimiento comparando superficialmente los valores

  const searchQuery = useSelector(state => state.data.searchQuery); //traigo datos ingresados en el buscador
  // Filtra los pokémon basándote en el estado de búsqueda
  const filteredPokemons = pokemons.filter(pokemon => 
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const loading = useSelector((state) => state.ui.loading); //Propiedad true/false, traigo el loading del estado

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails()); //Llamada al API de pokemons
  }, []);

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? ( //si es true se carga el spinner
        <Col offset={12}>
          <Spin spinning size='large' />
        </Col>
      ) : (
        <PokemonList pokemons={filteredPokemons} />
      )}
    </div>
    // envio el arreglo de pokemons
  );
}

export default App;


////ANT DESIGN FOR REACT https://ant.design/
//npm install antd
//npm install --save @ant-design/icons
//npm i axios
//npm install redux
//npm install react-redux
//npm install redux-thunk
//npm i @reduxjs/toolkit

/*
funciones creadas por convencion de Connect, ya no usa porque usamos los Hooks useSelector y useDispatcher
//tengo 2 props ahora (pokemons,setPokemons)
const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

*/