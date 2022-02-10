import React, {useEffect, useState} from "react";
import { useParams, useNavigate} from 'react-router-dom';
import {Button} from "@mui/material";
import {events} from "../../shared/const";
import {getTeamName} from "../../shared/helpers/getTeamName";


export const Details = ({setBetResult, setLastEvent, clearLastBet}) => {

    const navigate = useNavigate()
    let {id} = useParams()
    const [event, setEvent] = useState({})
    const [selectedResult, setSelectedResult] = useState('')

    useEffect(() => {
        clearLastBet();
        setEvent(events.find(x => x.id === +id))
    }, [])

    const goToHome = (e) => {
        e.preventDefault()
        navigate("/")
    }

    return (
        <div className="details">
            {event ? (
                <div className="container">
                    <span className="container__date">({event.date})</span>
                    <span className="container__name">
                            <p>
                                {getTeamName(event, 0)} -- {getTeamName(event, 2)}
                            </p>
                        </span>
                    <div className="container__buttons">
                        {event.bets
                          ?.sort((x, y) => x.position - y.position)
                          .map(bet => (
                            <Button className={selectedResult === bet.name ? "active" : null}
                                    variant="contained"
                                    key={bet.name}
                                    onClick={() => {
                                        setBetResult(bet.name);
                                        setLastEvent(event);
                                        setSelectedResult(bet.name)}}>
                                bet.title<br/>{bet.ratio}
                            </Button>
                        ))}
                    </div>
                    <button onClick={goToHome}>Сделать ставку</button>
                </div>) : null
            }
        </div>
    )
}