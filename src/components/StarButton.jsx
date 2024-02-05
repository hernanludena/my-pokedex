import { Button } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';

const StarButton = ({ isFavorite, onClick }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined; //indica cual icono debe renderizar
  return <Button icon={<Icon />} onClick={onClick} />;
};

export default StarButton;
