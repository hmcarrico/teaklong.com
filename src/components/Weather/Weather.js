import React, { Component } from 'react';
import axios from 'axios';
import './Weather.css';

class Weather extends Component{
    constructor(){
        super();
        this.state = {
            weather: [],
            weatherInput: '',
        }
    }

        weather = (zipp) => {
            axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipp}&units=imperial&appid=e7ade7b19cb20fd92e3ff62699607c60`).then(res => {
                this.setState({
                    weather: [ {name: res.data.name, cur: res.data.main.temp, max: res.data.main.temp_max, min: res.data.main.temp_min, desc: res.data.weather[0].description} ]
                })
            })
            }

        handleWeather = (e) => {
            this.setState({
                weatherInput: e.target.value
            })
        }

    render(){
        return(
            <div className='weath'>
                <div className='border'>
                <div className='weathh'>
                <div className='topp'>
                    <h1>Are the weather conditions right for you to board in ? </h1> <br/>
                    <input placeholder='Enter Zip Code' onChange={this.handleWeather}/>
                    <button onClick={() => this.weather(parseInt(this.state.weatherInput))}>GET WEATHER</button>
                    </div>
                    <br /><br />
                </div>
                {this.state.weather.map(weath => {
                    return (
                    <div className='weather'>
                        <u><h1>{weath.name}</h1></u>
                        <p><b>Current: </b>{Math.floor(weath.cur)}<span>&#8457;</span></p>
                        <p><b>Max: </b>{Math.floor(weath.max)}<span>&#8457;</span></p>
                        <p><b>Min: </b>{Math.floor(weath.min)}<span>&#8457;</span></p>
                        <b>Description: </b><br /><p>{weath.desc}</p>
                    </div>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default Weather;