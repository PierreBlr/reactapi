import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Deck = props => {

    const [cards, setCards] = useState([]);
    
    const [deckCards, setDeckCards] = useState([]);

    const headers = { 'X-RapidAPI-Key' : '92985ffcf7mshdc855b11997ff4cp13f53cjsn34d34d485eed'}
    

    useEffect(() => {
        axios.get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards",{ headers} )
             .then(response => {setCards(response.data.Basic);
             });
            }, []);

    
    useEffect(() => {
        axios.get(" https://test.corentindesfarges.fr/decks" )
             .then(response => {setDeckCards(response.data.Basic);
             });
            }, []);


    return (
        <div className='card-column'>
            {deckCards.map(function(card) {
            return (
                <Grid.Column key={card.id}>
                    <Link to={"/carte/"+ card.id}><img src={card.img}></img></Link>
                </Grid.Column>
                );
            })}
        </div>
    );
};

export default Deck;