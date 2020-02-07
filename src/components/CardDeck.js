import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Dos from "../board.jpg";

const Card = props => {
    const [singleDeckCard, setSingleDeckCard] = useState({});

    useEffect(() => {
        axios.get("https://test.corentindesfarges.fr/decks/"+ props.match.params.cardId).then(response => {setSingleDeckCard(response.data);
    });
   }, []);
   console.log(singleDeckCard);
   
    return (
        <div className="container-fluid">
            <h1 className="card-title">{singleDeckCard.name}</h1>
            <div className="row">
                <div className="col">
                    <img src={singleDeckCard.img}></img>
                    <img src={singleDeckCard.imgGold}></img>
                </div>
                <div className="col">
                    <div className="card-info-background" style={{backgroundImage: "url(" + Dos + ")"}}></div>
                    <div className="card-info text-center">
                        <p><span className="stat">Nom : </span>{singleDeckCard.name}</p>
                        <p><span className="stat">Extension : </span>{singleDeckCard.cardSet}</p>
                        <p><span className="stat">Type : </span>{singleDeckCard.type}</p>
                        <p><span className="stat">Faction : </span>{singleDeckCard.faction}</p>
                        <p><span className="stat">Rareté : </span>{singleDeckCard.rarity}</p>
                        <p><span className="stat">Coût de mana : </span><span className="mana">{singleDeckCard.cost}</span></p>
                        <p><span className="stat">Puissance : </span><span className="attack">{singleDeckCard.attack}</span></p>
                        <p><span className="stat">Santé : </span><span className="health">{singleDeckCard.health}</span></p>
                    </div>
                </div>
            </div>
            <Link to="/cartes" className="btn btn-info text-white mt-5 mb-5 mr-3">Retour aux cartes</Link>
            <Link to="/deck" className="btn btn-primary text-white mt-5 mb-5 mr-3">Retour au deck</Link>
        </div>
    );
};
export default Card;