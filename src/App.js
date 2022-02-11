
import './App.css';

import WeatherApp from './components/CurrentWeather.js';
import ToDoApp from './components/toDoApp';
import InspirationalPhoto from './components/InspirationalImage';
import { FaLinkedin } from 'react-icons/fa';

function App() {

  return (
    <div className="App">
         <header>
           <div className='title'><h1>Lovely Day</h1><p className='title-p'>Day Planner</p></div>
         </header>
        <main className='app-main'>
        <article className='image-and-weather'>
           <InspirationalPhoto /> 
        <div className='weather-section'>
          <WeatherApp />
        </div>
        </article>
        <article className='to-do-app'>
          <ToDoApp />
        </article>
     </main>
      <footer>
      <a className='juno-credit' href="https://junocollege.com/" target={'_blank'} rel='noreferrer'>
        <p className='juno-credit'>Created at © Juno College by:</p></a>
          <a className='footer-credit' href="https://www.linkedin.com/in/lorrainemleslie/"
            target={'_blank'} rel='noreferrer'>
            <p className='footer-credit'>Lorraine Leslie <FaLinkedin /></p>
          </a>
    </footer> 
    </div>
  );
}

export default App;
