import { getPokemonDetails } from '../api';
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from './types';

//Actions Creators sincronos
//Objeto que describe el cambio que va pasar
export const setPokemons = (payload) => ({ //me llegan en el payload todos los pokemos del API
  type: SET_POKEMONS,
  payload, //los nuevos pokemos son el payload
});



//Actions Creators asincronos
//Usando thunks para procesos asincronos, es un middleware especial, para no hacer la llamada desde el componente App.js 
//y mejore el rendimiento al ser manejado ahora por thunk
export const getPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonsDetailed = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );

    dispatch(setPokemons(pokemonsDetailed));
  };

  //thunks, permite agregar logica sincrona a nuestros action creators antes que lleguen al reducer
  //tambien existe saga que hace los mismo


  //Loader
  export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload,
  });
  
//Favorito
  export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload,
  });