import React from "react";
import Event from "./event";

export const Events = ({data}) => {
    return (
        <div className="bets">
            <p className="description">Футбол</p>
            <div>
                {
                    data.map((event) => <Event event={event} key={event.id}/>)
                }
            </div>
        </div>
    )
}