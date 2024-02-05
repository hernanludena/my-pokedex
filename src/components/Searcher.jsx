import { Input } from 'antd';  //Componentes de ANT DESIGNER
import { useDispatch } from 'react-redux';
//import { setFilter } from '../slices/dataSlice';
import { setSearchQuery } from '../slices/dataSlice';


export const Searcher = () => {

  const dispatch = useDispatch();

  const handleOnChange = (e) => { 
        // Despacha la acción setSearchQuery con el valor del input
        dispatch(setSearchQuery(e.target.value));
    // dispatch(setFilter(e.target.value));//cuando escriba se despacha accion y se envia el target
  }

  return <Input.Search 
    placeholder="Buscar..." 
    onChange={handleOnChange}
    style={{marginBottom: '10px'}} />
}

// const Searcher = () => {
//   return <Input.Search placeholder='Buscar...' style={{ marginBottom: 10 }} />;
// };

export default Searcher;



