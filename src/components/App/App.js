import Bids from '../Bids';
import Header from '../Header';
import './App.css';
import {Route, Routes , useLocation} from 'react-router-dom';
import Details from '../Details';
import {useState} from 'react';
import {data} from '../../shared/const';

function App() {

  const [betMassage, setBetMassage] = useState('')
  const [betId, setBetId] = useState('')
  
  let location = useLocation()
  let massage = betMassage ? 'success' : 'failure';

  const setNewBetId = () => {
    setTimeout(() => (setBetId('')), 4000)
  }
  
  return (
    <div className="App">
      {betId ? setNewBetId() : null}
        <Header />
        <div className={massage}>
          {
            (location.pathname === '/' && betId) 
              ? `Спасибо, Ваша ставка принята [${data[betId-1].team1} -- ${data[betId-1].team2}, ${betMassage}]` 
              : null
          }  
        </div>
        <Routes>
          <Route path="/" element={<Bids data={data}/>}/>
          <Route path="/bet/:id" element={<Details data={data} setBetMassage={setBetMassage} setBetId={setBetId}/>}/>
        </Routes>
        
        
    </div>
  );
}

export default App;
