import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getDateAndTime } from '../../utils';
import { useAppContext } from '../AppContextProvider';

const Header = () => {
  const {
    state: { language },
  } = useAppContext();

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearTimeout(timer);
  }, [setDate]);

  return (
    <header data-testid="header">
      <Routes />
      <span data-testid="display-time">{getDateAndTime(date, language)}</span>
    </header>
  );
};

const Routes = () => {
  return (
    <ul>
      <li>
        <NavLink to={'/'} exact activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={'/content1'} exact activeClassName="active">
          Content1
        </NavLink>
      </li>
      <li>
        <NavLink to={'reactjs'}>React JS</NavLink>
      </li>
    </ul>
  );
};

export default Header;
