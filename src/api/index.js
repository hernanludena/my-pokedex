import axios from 'axios';

export const getPokemons = () => {
  return axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=20')
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
};

//Trae los detalles del pokemon
export const getPokemonDetails = (pokemon) => {
  return axios.get(pokemon.url)
  .then(res => res.data)
  .catch((err) => console.log(err));
}


//Manejo de concurrencia, cuando no se tenia el middleware thunk con la funcion asincrona resuelta por thunk
/*const CONCURRENCY_LIMIT = 5;
let activeRequests = 0;
const requestQueue = [];

const processQueue = async () => {
  if (requestQueue.length === 0 || activeRequests >= CONCURRENCY_LIMIT) {
    return;
  }

  activeRequests++;
  const { pokemon, resolve, reject } = requestQueue.shift();

  try {
    const res = await axios.get(pokemon.url);
    resolve(res.data);
  } catch (err) {
    reject(err);
    console.log(err);
  } finally {
    activeRequests--;
    processQueue();
  }
};

export const getPokemonDetails = (pokemon) => {
  return new Promise((resolve, reject) => {
    requestQueue.push({ pokemon, resolve, reject });
    processQueue();
  });
};
*/