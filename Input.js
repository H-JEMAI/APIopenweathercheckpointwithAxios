import React from 'react';


const Input = props =>
{
  <form onSubmit={this.preventSubmit}>
    <input type='text' placeholder='Enter CityName :'
     onKeyDown={props.queryWeather}/>
  </form>
}
export default Input