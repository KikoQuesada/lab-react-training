import React from 'react';
import './App.css';

import BoxColor from './components/box-color/BoxColor';
import Random from './components/random/Random';
import Greeting from './components/greeting/Greeting';
import IdCard from './components/id-card/IdCard';
import CreditCard from './components/credit-card/CreditCard';
import Rating from './components/rating/Rating';

function App() {
  return (
    <div className="App container">

      <div className="mx-4 my-4">
        <IdCard lastName="Doe" firstName="John" gender="Male" height={`${1.78}m`} birth={new Date("1992-07-14")} picture="https://randomuser.me/api/portraits/men/44.jpg" />
        <IdCard lastName="Delores" firstName="Obrien" gender="Female" height={`${1.72}m`} birth={new Date("1988-05-11")} picture="https://randomuser.me/api/portraits/women/44.jpg" />
      </div>

      <div className="row m-4 text-start">
        <Greeting className="col-12" lang="de">Ludvig</Greeting>
        <Greeting className="col-12" lang="fr">Pierre</Greeting>
        <Greeting className="col-12" lang="es">Kiko</Greeting>
      </div>

      <div className="row m-4 text-start">
        <Random min={1} max={6} />
        <Random min={0} max={100} />
        <Random min={25} max={50} />
      </div>

      <div className="mb-3">
        <BoxColor r={255} g={0} b={0} />
      </div>
      
      <div className="mb-3">
      <BoxColor r={50} g={200} b={50} />
      </div>
      
      <div className="mb-3">
      <BoxColor r={0} g={51} b={255} />
      </div>

      <div className="row justify-content-center">
        <CreditCard 
        type="Visa" 
        number="0123456789018845" 
        expirationMonth={3} 
        expirationYear={21} 
        bank="BPN" 
        owner="Kiko Quesada" 
        bgColor="#11aa99" 
        color="white" 
        />
        <CreditCard 
        type="Master Card" 
        number="0123456789010995" 
        expirationMonth={3} 
        expirationYear={21} 
        bank="N26" 
        owner="Kiko Quesada" 
        bgColor="#eeeeee" 
        color="black" 
        />
        <CreditCard 
        type="Visa" 
        number="0123456789016984" 
        expirationMonth={12} 
        expirationYear={19} 
        bank="N26" 
        owner="Kiko Quesada" 
        bgColor="#ddbb55" 
        color="white" 
        />
      </div>

      <Rating />


    </div>
  );
}

export default App;
