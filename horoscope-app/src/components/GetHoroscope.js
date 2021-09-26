import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import aquarius from './assets/aquarius.png'
import cancer from './assets/cancer.png'
import capricorn from './assets/capricorn.png'
import gemini from './assets/gemini.png'
import leo from './assets/leo.png'
import pisces from './assets/pisces.png'
import sagittarius from './assets/sagittarius.png'
import scorpio from './assets/scorpio.png'
import taurus from './assets/taurus.png'
import virgo from './assets/virgo.png'
import aries from './assets/aries.png'
import libra from './assets/libra.png'

import color from './assets/color.png'
import compatible from './assets/compatible.png'
import mood from './assets/mood.png'
import clock from './assets/clock.png'
import lucky from './assets/lucky.png'

import styled from 'styled-components';

const Header = styled.h1`
    font-family: 'Cormorant Garamond';
    font-size: 40px;
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 900px;
    justify-content: center;
    margin: auto;

`

const Button = styled.button`
    background: white;
    border: none;
    padding:25px;

`

const Card = styled.div`
    display: flex;
    width: 900px;
    height: 300px;
    border: 2px solid black;
    justify-content: center;
    margin: auto;
    margin-bottom: 40px;
    flex-direction: column;
`

const CardInfo = styled.p`
    display:flex;
    margin: 5px;
    font-family: 'Lato';
    margin: auto;
    font-size: 20px;
    align-items: center;
`
const CardImg = styled.img`
    height: 35px;
    margin-right: 6px;
`


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
        console.log(e.currentTarget.value, "clicked");
        this.setState({value: e.currentTarget.value})

        this.getHoroscope(e.currentTarget.value);
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

          <Container>
            <Header>Choose your sign</Header>
            <div value={this.state.value}>
                <Button value="aquarius" onClick={this.handleChange}><img src={aquarius} alt="aquarius" height="100px"></img></Button>
                <Button value="Pisces" onClick={this.handleChange}><img src={pisces} alt="pisces" height="100px"></img></Button>
                <Button value="Aries" onClick={this.handleChange}><img src={aries} alt="aries" height="100px"></img></Button>
                <Button value="Taurus" onClick={this.handleChange}><img src={taurus} alt="taurus" height="100px"></img></Button>
                <Button value="Gemini" onClick={this.handleChange}><img src={gemini} alt="gemini" height="100px"></img></Button>
                <Button value="Cancer" onClick={this.handleChange}><img src={cancer} alt="cancer" height="100px"></img></Button>
                <Button value="Leo" onClick={this.handleChange}><img src={leo} alt="leo" height="100px"></img></Button>
                <Button value="Virgo" onClick={this.handleChange}><img src={virgo} alt="virgo" height="100px"></img></Button>
                <Button value="Libra" onClick={this.handleChange}><img src={libra} alt="libra" height="100px"></img></Button>
                <Button value="Scorpio" onClick={this.handleChange}><img src={scorpio} alt="scorpio" height="100px"></img></Button>
                <Button value="Sagittarius" onClick={this.handleChange}><img src={sagittarius} alt="sagittarius" height="100px"></img></Button>
                <Button value="Capricorn" onClick={this.handleChange}><img src={capricorn} alt="capricorn" height="100px"></img></Button>
            </div>
          </Container>

          <Card>
                <CardInfo>{horoscope.current_date}</CardInfo>
                <CardInfo>{horoscope.description}</CardInfo>
                <CardInfo><CardImg src={color} alt="color-palette"></CardImg>{horoscope.color} is your lucky color</CardInfo>
                <CardInfo><CardImg src={compatible} alt="compatible" ></CardImg>{horoscope.compatibility} is your most compatible sign</CardInfo>
                <CardInfo><CardImg src={lucky} alt="lucky-horseshoe" ></CardImg>{horoscope.lucky_number} is your lucky number</CardInfo>
                <CardInfo><CardImg src={mood} alt="moods"></CardImg>Today you will be feeling {horoscope.mood}</CardInfo>
                <CardInfo><CardImg src={clock} alt="clock"></CardImg>Lucky time:{horoscope.lucky_time}</CardInfo>
          </Card>
          </div>
        );
    }


}



export default withRouter(GetHoroscope);