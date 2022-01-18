
import './App.css';
import WeatherApp from './CurrentWeather.js';
import ToDoApp from './toDoApp';
import {FaLinkedin} from 'react-icons/fa';

function App() {

  return (
    <div className="App">

       <main className='app-main'>
        <div className='title'><h1>Lovely Day</h1><p className='title-p'>what are your dreams for today?</p></div>
        <article className='weatherSection'>
          <WeatherApp />
        </article>
        <article>
          <ToDoApp />
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

export default App;
