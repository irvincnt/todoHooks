import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css'

const NavBar = () => {
  return ( 
    <nav className='nav'>
      <ul>
        <li>
          <Link to='/home'> Home </Link>
        </li>
        <li>
          <Link to='/about'> About </Link>
        </li>
        <li>
          <Link to='/login'> Login </Link>
        </li>
      </ul>
    </nav>
  );
}
 
export default NavBar;