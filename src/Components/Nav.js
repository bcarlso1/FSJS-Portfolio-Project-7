import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
      return (
      <nav class="main-nav">
        <ul>
          <li><NavLink to='/mountain' query="mountain">Mountain</NavLink></li>
          {/*  onClick={() => props.changeURL("mountain") */}
          <li><NavLink to='/lake' query="mountain">Lake</NavLink></li>
          <li><NavLink to='/boat' query="mountain">Boat</NavLink></li> 
        </ul>
      </nav>
      )  
};
  
export default Nav;

