import React from "react";
import { useParams, useNavigate} from 'react-router-dom';


export const Details = ({data, setBetMassage, setBetId}) => {

    const navigate = useNavigate()
    let {id} = useParams()

    const goToHome = (e) => {
        e.preventDefault()
        setBetId(id)
        navigate("/")
    }

    const {team1, team2, win1, win2, draw, date} = data[id-1]
    return (
        <div className="details">
            <div className="details-wrap">
                <p className="details-wrap-date">({date})</p>
                <span className="details-wrap-name">
                    <p className="bet-name">{team1} -- {team2}</p>
                </span>
                <div className="details-wrap-button">
                    <button className="bids" onClick={() => setBetMassage("win1")}> win1<br />{win1}</button>
                    <button className="bids" onClick={() => setBetMassage("draw")}> draw<br/>{draw}</button>
                    <button className="bids" onClick={() => setBetMassage("win2")}> win2<br/>{win2}</button>
                </div>
                <button className="details-wrap-bet" onClick={goToHome}>Сделать ставку</button>
            </div>
        </div>
    )
}