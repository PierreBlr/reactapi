import React, { useEffect, useState } from "react";
import axios from "axios";

const List = props => {
    const [infos, setInfos] = useState([]);

    const headers = { 'X-RapidAPI-Key' : '92985ffcf7mshdc855b11997ff4cp13f53cjsn34d34d485eed'}
    
    useEffect(() => {
        axios.get("https://omgvamp-hearthstone-v1.p.rapidapi.com/info",{ headers} )
             .then(response => {setInfos(response.data.races);
             });
            }, []);
        return (
            <div>
            <h1>Rechercher une carte</h1>
            <table>
                <thead>Cartes</thead>
                <tbody>
                {infos.map(function(info) {
                    return (
                    <tr key={info}>
                        <td><a href="#">{info}</a></td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};
export default List;