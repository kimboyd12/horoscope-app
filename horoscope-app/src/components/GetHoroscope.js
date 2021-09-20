import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Card from './Card';


class GetHoroscope extends React.Component {
     constructor(props){
        super(props);
        this.state = {
          horoscope: '',
          value: '',
        }

        this.handleChange = this.handleChange.bind(this);    
    }




    handleChange(e) {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({value: e.target.value})

        this.getHoroscope(e.target.value);
    }

    getHoroscope(zodiacSign){
        console.log(zodiacSign);
        const sign = zodiacSign;
         axios.post("https://aztro.sameerkumar.website/?sign="+sign+"&day=today")
            .then(res => {
                console.log("this is the data",res)
                this.setState({
                    horoscope: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount() {
        this.getHoroscope(this.state.value);
    }


    render() {

        const horoscope = this.state.horoscope;


        return (
          <div>
            <h1>Choose your sign</h1>
            <div value={this.state.value}>
                <button value="Aquarius" onClick={this.handleChange}>Aquarius</button>
                <button value="Pisces" onClick={this.handleChange}>Pisces</button>
                <button value="Aries" onClick={this.handleChange}>Aries</button>
                <button value="Taurus" onClick={this.handleChange}>Taurus</button>
                <button value="Gemini" onClick={this.handleChange}>Gemini</button>
                <button value="Cancer" onClick={this.handleChange}>Cancer</button>
                <button value="Leo" onClick={this.handleChange}>Leo</button>
                <button value="Virgo" onClick={this.handleChange}>Virgo</button>
                <button value="Libra" onClick={this.handleChange}>Libra</button>
                <button value="Scorpio" onClick={this.handleChange}>Scorpio</button>
                <button value="Sagittarius" onClick={this.handleChange}>Sagittarius</button>
                <button value="Capricorn" onClick={this.handleChange}>Capricorn</button>

            </div>
            <div>
                <p>{horoscope.current_date}</p>
                <p>{horoscope.description}</p>
                <p>{horoscope.color} is your lucky color</p>
                <p>{horoscope.compatibility} is your most compatible sign</p>
                <p>{horoscope.lucky_number} is your lucky number</p>
                <p>Mood: {horoscope.mood}</p>
                <p>Lukcy time:{horoscope.lucky_time}</p>
            </div>
          </div>
        );
    }


}



export default withRouter(GetHoroscope);