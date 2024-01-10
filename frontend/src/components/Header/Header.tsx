import { Link, NavLink } from 'react-router-dom';
import './Header.scss';


export const Header = () => {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        <span style={{color: '#1E3C8E'}}>Wish</span>
        <span>Facrory</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="39"
          viewBox="0 0 40 39"
          fill="none"
        >
          <path
            d="M37.9939 3.30194C39.4239 3.40408 40.2964 4.91522 39.658 6.18424L23.8303 37.6452C22.8857 39.5228 20.0255 38.8434 20.0234 36.741L20.0027 16.5026C20.002 15.7961 19.6238 15.141 19.0088 14.781L1.39126 4.46926C-0.438881 3.39806 0.424237 0.618382 2.54007 0.769512L37.9939 3.30194Z"
            fill="#1E3C8E"
          />
        </svg>
      </a>

      <nav className="header__nav">
        <NavLink to="/" className="header__nav--link">Main page</NavLink>
        <NavLink to="/about" className="header__nav--link">About us</NavLink>
        <NavLink to="/wishes" className="header__nav--link">Wishes list</NavLink>
        <NavLink to="/request" className="header__nav--link">Request wish</NavLink>
        <NavLink to="/reports" className="header__nav--link">Reports</NavLink>
        <Link to="/" className="header__button">Donate</Link>
      </nav>
    </header>
  );
}