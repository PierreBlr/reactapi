import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Deck = props => {
    
    const [deckCards, setDeckCards] = useState([]);
    
    useEffect(() => {
        axios.get("https://test.corentindesfarges.fr/decks").then(response => {setDeckCards(response.data);
    });
   }, []);

    function deleteCard(id, idx){
        axios.delete("https://test.corentindesfarges.fr/decks/" + id).then(data=>{
            const deck = [...deckCards];
            deck.splice(idx, 1);
            setDeckCards(deck);
        })        
    }

    return (
        <div className="card-column">
        {deckCards.map(function(deckCard, idx) {
            return (
                <div className="card">
                    <Link to={"/cartedeck/"+ deckCard.id}><img src={deckCard.img}></img></Link>
                    <div className="card-body">
                        <button className="btn btn-danger text-white mt-3 mb-3" onClick={()=>deleteCard(deckCard.id, idx)} >Supprimer du deck</button>
                    </div>
                </div>
            );
        })}   
        </div>
    );
};

export default Deck;