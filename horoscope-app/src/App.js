import './App.css';
import React from 'react';
import GetHoroscope from '../src/components/GetHoroscope';
import { Route } from 'react-router-dom';


function App() {

 





  return (

    <div>
      <Route exact path="/" component={GetHoroscope} />

    </div>

  )
}

export default App;


