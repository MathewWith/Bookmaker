import React from "react";
import {Link} from 'react-router-dom'

export const Bet = ({bet}) => {
    return (
        <div className="bet" >
            <ul className="li">
                <li>
                    <Link to={`/bet/${bet.id}`} className="bet-link">
                        <p className="bet-name">{bet.team1} -- {bet.team2}</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}