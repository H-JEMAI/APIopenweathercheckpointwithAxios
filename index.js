import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Input from './modules/Input';
import Header from './modules/Header';
import Weather from './modules/Weather';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: [],
      temperature: [],
      meteo: []
    };
  }

  getWeather = query => {
    //ex api key 5945256758865a86629aa09e82406c69  name  hatem
    // eba8046086c79bacfae742bf0c8a0b82   name  hatem
    //axios.get(`https://api.openweathermap.org/data/2.5/find?q=${query}&units=metric&appid=eba8046086c79bacfae742bf0c8a0b82`)
   
    axios.get(`https://api.openweathermap.org/data/2.5/find?q=${query}&units=imperial&appid=eba8046086c79bacfae742bf0c8a0b82`)
      .then(response => {
          this.setState({
          weather: response.data.list[0],
          temperature: response.data.list[0].main.temp,
          meteo: response.data.list[0].weather[0].description
        });
      })
         .catch(error => {
        console.log('Error', error);
      });
  };

  queryWeather = (event, cityName) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      cityName = event.target.value;
      this.getWeather(cityName);
    }
  }

  render() {
    return (
      <div>
        <div className='content'>
          <Header />
          <Input queryWeather={this.queryWeather} />
        </div>
        <Weather
          city={this.state.weather.name}
          temperature={this.state.temp}
          meteo={this.state.clouds} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
