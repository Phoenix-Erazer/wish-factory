import {NavLink} from 'react-router-dom';
import './Header.scss';
import { Button } from '../Button';
import classNames from 'classnames';

const getLinkClass = ({ isActive }: { isActive: boolean }) => classNames('header__nav--link', { 'active': isActive });

export const Header = () => {
  return (
    <header className="header">
      <img src="/img/Logo.svg" alt="logo" />
      <nav className="header__nav">
        <NavLink to="/" className={getLinkClass}>
          Main page
        </NavLink>
        <NavLink to="/about" className={getLinkClass}>
          About us
        </NavLink>
        <NavLink to="/wishes" className={getLinkClass}>
          Wishes list
        </NavLink>
        <NavLink to="/request" className={getLinkClass}>
          Request wish
        </NavLink>
        <NavLink to="/reports" className={getLinkClass}>
          Reports
        </NavLink>
        <Button to='/donate' name='Donate'
        styleName='button__header'/>
      </nav>
    </header>
  );
}