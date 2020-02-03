import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Dos from "../board.jpg";
import { useAlert } from 'react-alert'

var infoStyle = {
    backgroundImage: "url(" + { Dos } + ")"
  };

const Card = props => {
    const [singleCard, setSingleCard] = useState({});

    

    const headers = { 'X-RapidAPI-Key' : '92985ffcf7mshdc855b11997ff4cp13f53cjsn34d34d485eed'}

    const carte = {id : 'carteId', 
                   img : 'singleCard'
                  };

    
    useEffect(() => {
        axios.get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/"+ props.match.params.cardId,{ headers} )
             .then(response => setSingleCard(response.data[0]));
      }, [props.match.params.cardId]);


      
    function addCard(carte){
        axios.post(" https://test.corentindesfarges.fr/decks")
    }
    
        return (
            <div className="container-fluid">
                <h1 className="card-title">{singleCard.name}</h1>
                <div className="row">
                    <div className="col">
                        <img src={singleCard.img}></img>
                        <img src={singleCard.imgGold}></img>
                    </div>
                    <div className="col">
                        <div className="card-info-background" style={{backgroundImage: "url(" + Dos + ")"}}></div>
                            <div className="card-info text-center">
                                <p><span className="stat">Nom : </span>{singleCard.name}</p>
                                <p><span className="stat">Extension : </span>{singleCard.cardSet}</p>
                                <p><span className="stat">Type : </span>{singleCard.type}</p>
                                <p><span className="stat">Faction : </span>{singleCard.faction}</p>
                                <p><span className="stat">Rareté : </span>{singleCard.rarity}</p>
                                <p><span className="stat">Coût de mana : </span><span className="mana">{singleCard.cost}</span></p>
                                <p><span className="stat">Puissance : </span><span className="attack">{singleCard.attack}</span></p>
                                <p><span className="stat">Santé : </span><span className="health">{singleCard.health}</span></p>
                            </div>
                        </div>
                </div> 
                <button className="btn btn-info mt-5 mb-5" type="submit" onClick={addCard} >Ajouter au deck</button>      
            </div>
        );
    };
export default Card;




