import React from "react";
import Bet from "../Bet";

export const Bids = ({data}) => {
    return (
        <div className="bids">
            <p className="description">Футбол</p>
            { 
                data.map((bet) => <Bet bet={bet} key={bet.id}/>)
            }
        </div>
    )
}