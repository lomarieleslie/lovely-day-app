import axios from 'axios';
import {useState} from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import {FaLinkedin} from 'react-icons/fa';


function WeatherApp() {


  // const url = 'api.openweathermap.org/data/2.5/weather?q={city name}&appid={}';
  // API KEY
  const apiKey = 'fe5993bb7858caa6305894d3bb245e56';
  
  // DECLARED CONSTANT VARIABLES
  const [currentWeather, setCurrentWeather] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); 



  const handleInput = (event) => {
    // console.log('is this working?', event.target.value);
    setUserInput(event.target.value)
  }

  const handleSubmit = (event) => {
    axios({
      url: 'http://api.openweathermap.org/data/2.5/weather?id=524901&appid=fe5993bb7858caa6305894d3bb245e56',
      method: 'GET',
      dataResponse: 'json',
      params: {
        appid: apiKey,
        q: userInput,
        units: 'metric'
      }
    }).then((response) => {
      console.log(response.data.name);
      setCurrentWeather(response.data);
    });
    event.preventDefault();
    setSearchTerm(userInput);
    setUserInput('');
    
  } 

  return (
    <div className="App">
      <main className='app-main'>
        <div className='title'><h1>Lovely Day</h1><p className='title-p'>what are your dreams for today?</p></div>
        
     <article className='weatherSection'>
     <form onSubmit={handleSubmit}>
       <label htmlFor="search">Search for your city here:</label>
       <input type="text" placeholder='Where you at?'id="search" onChange={handleInput} value={userInput} />
       <button>Search</button>
     </form>
     
     {currentWeather.weather && (

         <div className='current-weather'>
           <h2 className='current-weather-element'>{currentWeather.name}</h2>
           <img className='current-weather-element' src={`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`} alt={currentWeather.weather[0].description}/>
           <p className='current-weather-element'>{Math.floor(currentWeather.main.temp)}&deg;C</p>
           <p className='current-weather-element'>{currentWeather.weather[0].description}</p>
         </div>
    
     )}
     </article>
      </main>
     <footer>
      <a className='juno-credit' href="https://junocollege.com/" target="_blank"
        ><p className='juno-credit'>Created at © Juno College by:</p></a>
          
          <a className='footer-credit'
            href="https://www.linkedin.com/in/lorrainemleslie/"
            target="_blank"
>
            <p className='footer-credit'>Lorraine Leslie <FaLinkedin /></p>
          
          </a>
    </footer>
      
    </div>
  );
}



export default WeatherApp