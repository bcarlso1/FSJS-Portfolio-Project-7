import React from 'react';
import { NavLink } from 'react-router-dom';

// links for 3 items, direct to routes on click

const Nav = (props) => {
      return (
      <nav className="main-nav">
        <ul>
          <li><NavLink to='/mountain' >Mountain</NavLink></li>
          <li><NavLink to='/lake' >Lake</NavLink></li>
          <li><NavLink to='/boat'>Boat</NavLink></li> 
        </ul>
      </nav>
      )  
};
  
export default Nav;

