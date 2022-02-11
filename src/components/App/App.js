import Events from '../events';
import Header from '../header';
import './app.scss';
import {Route, Routes , useLocation} from 'react-router-dom';
import Details from '../details';
import {useEffect, useState} from 'react';
import {events} from '../../shared/const';
import {getTeamName} from "../../shared/helpers/getTeamName";
import {getInfoMessage} from '../../shared/helpers/getInfoMessage';
import {clearLastBet} from "../../shared/helpers/clearLastBet";

function App() {
  
  const [betResult, setBetResult] = useState(null)
  const [lastEvent, setLastEvent] = useState(null)
  let location = useLocation()
  
  useEffect(() => clearLastBet(location, setBetResult)
  , [location.pathname])
  
  return (
    <div className="app">
        <Header />
        <div className='app__get-info'>
          {getInfoMessage(location, betResult, lastEvent, getTeamName)}
        </div>
        <Routes>
          <Route path="/" element={<Events data={events}/>}/>
          <Route path="/bet/:id"
                 element={
                   <Details
                     setBetResult={setBetResult}
                     setLastEvent={setLastEvent}/>
                 }/>
        </Routes>
    </div>
  );
}

export default App;
