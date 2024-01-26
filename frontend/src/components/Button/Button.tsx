import { Link } from 'react-router-dom';
import './Button.scss'
type Props = {
  to: string,
  styleName: string,
  name: string
}

export const Button: React.FC<Props> = ({to, styleName, name}) => {
  return (
    <Link to={to} className={styleName}>{name}</Link>
  );
}