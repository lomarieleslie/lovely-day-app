import axios from 'axios';
import {useState} from 'react';


function WeatherApp() {


  // const url = 'api.openweathermap.org/data/2.5/weather?q={city name}&appid={}';
  // API KEY
  const apiKey = 'fe5993bb7858caa6305894d3bb245e56';
  
  // DECLARED CONSTANT VARIABLES
  const [currentWeather, setCurrentWeather] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [setSearchTerm] = useState(''); 



  const handleInput = (event) => {
    setUserInput(event.target.value)
  }

  const handleSubmit = (event) => {
    axios({
      url: 'https://api.openweathermap.org/data/2.5/weather?id=524901&appid=fe5993bb7858caa6305894d3bb245e56',
      method: 'GET',
      dataResponse: 'json',
      params: {
        appid: apiKey,
        q: userInput,
        units: 'metric'
      }
    }).then((response) => {
      setCurrentWeather(response.data);
    });
    event.preventDefault();
    setSearchTerm(userInput);
    setUserInput('');
  } 

  return (
    <div className="App">
        
     <form className='weather-app-form'onSubmit={handleSubmit}>
       <label htmlFor="search">Search for your city here:</label>
       <input type="text" placeholder='Where you at?'id="search" onChange={handleInput} value={userInput} required/>
       <button className="location-search-button">Search</button>
     </form>
     
     {currentWeather.weather && (

         <div className='current-weather'>
           <h2 className='current-weather-element'>{currentWeather.name}</h2>
           <img className='current-weather-element' src={`https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`} alt={currentWeather.weather[0].description}/>
           <p className='current-weather-element'>{Math.floor(currentWeather.main.temp)}&deg;C</p>
           <p className='current-weather-element'>{currentWeather.weather[0].description}</p>
         </div>
    
     )}

     
      
    </div>
  );
}



export default WeatherApp