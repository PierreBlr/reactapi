import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.png";

import '../styles/App.css';

const Menu = props => {
  return (
    <div>
      <Link to="/home"><img src={Logo}></img></Link><br></br>
        <ul className="nav d-flex">
          <li className="menu"><Link to="/home">L'auberge</Link></li>
          <li className="menu"><Link to="/cartes">Cartes</Link></li>
          <li className="menu"><Link to="/deck">Mon Deck</Link></li>
      </ul>
    </div>
  );
};

export default Menu;