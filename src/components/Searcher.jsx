import { Input } from 'antd';  //Componentes de ANT DESIGNER
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../slices/dataSlice';

export const Searcher = () => {

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    // Despacha la acción setSearchQuery con el valor del input
    dispatch(setSearchQuery(e.target.value));
  }

  return <Input.Search
    placeholder="Buscar..."
    onChange={handleOnChange}
    style={{ marginBottom: '10px' }} />
}

export default Searcher;



