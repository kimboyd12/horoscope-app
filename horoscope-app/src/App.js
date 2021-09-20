import './App.css';
import React, { useState } from 'react';
import GetHoroscope from '../src/components/GetHoroscope';
import Card from '../src/components/Card';
import { Route } from 'react-router-dom';


function App() {

 





  return (

    <div>
      <Route exact path="/" component={GetHoroscope} />
      <Route exact path="/horoscope" component={Card}  />

    </div>

  )
}

export default App;


