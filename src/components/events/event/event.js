import React from "react";
import {Link} from 'react-router-dom'
import {getTeamName} from "../../../shared/helpers/getTeamName";

export const Event = ({event}) => {
    return (
        <Link to={`/bet/${event.id}`} className="bet">
            <p className="bet-name">
              {getTeamName(event, 0)} --
              {getTeamName(event, 2)}
            </p>
        </Link>
    )
}