import React, { useEffect, useState } from "react";
import axios from "axios";
import { GridColumn, Grid, } from "semantic-ui-react";
import { Link } from "react-router-dom";


const Cards = props => {
    
    const [cards, setCards] = useState([]);

    const headers = { 'X-RapidAPI-Key' : '92985ffcf7mshdc855b11997ff4cp13f53cjsn34d34d485eed'}
     
    useEffect(() => {
        axios.get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards",{ headers} )
             .then(response => {setCards(response.data.Basic);
             });
            }, []);
            
        return (
            <div>   
                <h1>Les Cartes</h1>
                <div className="card-column">
                    {cards.map(function(card) {
                        return (
                            <Grid.Column key={card.cardId}>
                                <Link to={"/carte/"+ card.cardId}><img src={card.img}></img></Link>
                            </Grid.Column>
                        );
                    })}
                </div>
            </div>
        );
    };
export default Cards;