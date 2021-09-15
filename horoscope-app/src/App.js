import './App.css';
import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  constructor () {
    super()
    this.state = {
      sign: '',
      date: '',
      horoscope: '',
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler () {
    axios.get('https://ohmanda.com/api/horoscope/aquarius/')
    .then(res => this.setState({
        sign: res.data.sign,
        date: res.data.date,
        horoscope: res.data.horoscope,  
      }))
  }

  render () {
    return (
      <div>
        <button onClick={this.clickHandler}>Get Horoscope</button>
        <p>{this.state.horoscope}</p>
      </div>
    )
  }
}



export default App;
