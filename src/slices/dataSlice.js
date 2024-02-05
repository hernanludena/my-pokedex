import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemons, getPokemonDetails } from '../api';
import { setLoading } from './uiSlice';

const initialState = {
  pokemons: [],
  searchQuery: '', // Añade esta línea para manejar el estado de búsqueda
};

//Funcion Generadora Asincrona de Thunk para consultar el API de pokemons
export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true)); //envio true en el payload para que se cargue el spinner
    const pokemonsRes = await getPokemons(); //Primero trae todos los pokemones
    // const pokemonsDetailed = await Promise.all( //Segundo trae el detalle de cada pokemon
    //   pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
    // );
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map(async (pokemon) => {
        const pokemonDetails = await getPokemonDetails(pokemon);
        return { ...pokemonDetails, favorite: false }; // Añade la propiedad favorite para no usar asignaciones directas con immer
      })
    );
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false)); //envio false en el payload para que se despareza el spinner
  }
);


//Con Slice ya no nos encargamos de los types
export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload; //Con esta asignacion Redux toolkit se encarga por debajo de manejar como inmutables, usa immer js por dentro
      state.pokemonsFiltered = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {  //La función findIndex recibe una función callback que se ejecuta para cada elemento del arreglo pokemons.
        return pokemon.id === action.payload.pokemonId;  //Esta es la función callback que compara el id de cada Pokémon con un pokemonId proporcionado en action.payload.
      });

      if (currentPokemonIndex >= 0) { //Si el indice existe
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;  //valor booleano para saber si es favorito

        state.pokemons[currentPokemonIndex].favorite = !isFavorite; //crea un atributo llamado favorite en el estado
        
        const isHlu = state.pokemons[currentPokemonIndex].adicional = "hlu";
        console.log("hlu: " + isHlu)
        //puedes crear propiedades en el estado de Redux mediante asignaciones directas gracias a Immer en Redux Toolkit
      }
    }, 
        // Reducer para actualizar el estado de búsqueda
        setSearchQuery: (state, action) => {
          state.searchQuery = action.payload;
        },
  },
});

export const { setFavorite, setPokemons, setSearchQuery  } = dataSlice.actions; 
export default dataSlice.reducer;
