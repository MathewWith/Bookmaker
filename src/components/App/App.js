import Events from '../events';
import Header from '../header';
import './app.scss';
import {Route, Routes , useLocation} from 'react-router-dom';
import Details from '../details';
import {useState} from 'react';
import {events} from '../../shared/const';
import {getTeamName} from "../../shared/helpers/getTeamName";

function App() {

  const [betResult, setBetResult] = useState(null)
  const [lastEvent, setLastEvent] = useState(null)
  let location = useLocation()

  const getInfoMessage = () => {
    return (
      (location.pathname === '/' && betResult && lastEvent.id)
        ? `Спасибо, Ваша ставка принята [${getTeamName(lastEvent, 0)} -- ${getTeamName(lastEvent, 2)}]`
        : null
    )
  }

  const clearLastBet = () => {
    setLastEvent(null);
    setBetResult(null);
  }
  
  return (
    <div className="app">
        <Header />
        <div>
          {getInfoMessage()}
        </div>
        <Routes>
          <Route path="/" element={<Events data={events}/>}/>
          <Route path="/bet/:id"
                 element={
                   <Details
                     setBetResult={setBetResult}
                     setLastEvent={setLastEvent}
                     clearLastBet={clearLastBet}/>
                 }/>
        </Routes>
    </div>
  );
}

export default App;
