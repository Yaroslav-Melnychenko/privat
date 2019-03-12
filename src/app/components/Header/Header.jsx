import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Курсы валют</Link></li>
          <li><Link to="/atms">Ближайшие банкоматы</Link></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header;