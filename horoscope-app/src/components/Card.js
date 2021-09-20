import React, { Component } from 'react';
import axios from 'axios';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
          today: '',
          value: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value);
        this.setState({value: e.target.value})

        this.getHoroscope(e.target.value);
    }

    getHoroscope(zodiacSign){
        console.log(zodiacSign);
        const sign = zodiacSign;
         axios.post("https://aztro.sameerkumar.website/?sign="+sign+"&day=today")
            .then(res => {
                console.log(res)
                this.setState({
                    today: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }


    render() {

        const today = this.state.today;


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
          </div>
        );
    }

    componentDidMount() {
        this.getHoroscope(this.state.value);
    }
}



export default Card;