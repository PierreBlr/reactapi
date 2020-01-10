import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.png";
import Aubergiste from "../aubergiste.jpg";
import '../styles/App.css';

const Home = props => {
  return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 class="display-4">HearthDeck</h1>
          <p class="lead"> Bienvenue sur la bibliothèque hearthstone construite en React JS.<br></br>Rechercher vos cartes préférés par extension et enregistrer les via l'onglet Deck</p>
          <br></br>
          <img className="aubergiste" src={Aubergiste}></img>
        </div>
      </div>
  );
};

export default Home;