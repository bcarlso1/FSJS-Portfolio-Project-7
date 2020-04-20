import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <nav class="main-nav">
        <ul>
          <li><NavLink to='/mountain'>Mountain</NavLink></li>
          <li><NavLink to='/lake'>Lake</NavLink></li>
          <li><NavLink to='/boat'>Boat</NavLink></li> 
        </ul>
      </nav>
    )
   
};

export default Nav;