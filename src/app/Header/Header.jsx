import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../Routes/constants';
import styles from './Header.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.menu}>
        {
          Object.values(ROUTES).map(route => {
            return (
              <li
                className={styles.link}
                key={route.path}
              >
                <Link to={route.path}>
                  {route.label}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </header>
  )
};

export default Header;
