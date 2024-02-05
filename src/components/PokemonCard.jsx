
import { Card } from 'antd';  //Componente de ANT
import { useDispatch } from 'react-redux';
import Meta from 'antd/lib/card/Meta';
import StarButton from './StarButton';
import { setFavorite } from '../slices/dataSlice';
import './PokemonList.css';

const PokemonCard = ({ name, image, types, id, favorite }) => {

  const dispatch = useDispatch();

  //Obtener los tipos y juntarlos
  const typesString = types.map((elem) => elem.type.name).join(', ');//Types de pokemon

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };


  return (
    <Card
      title={name}
      // cover={ <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png'alt='Ditto' />}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}  //extra: componente que permite renderizar algo en la parte superior derecha (ideal para la estrella)
      >
        <Meta description={typesString} />
      </Card>
    );
};

export default PokemonCard;

//StarButton es icono