import logo from './logo.svg';
import './App.css';

function Button1(){
  return(
    <button className='b1'>
      Lets Get You Scheduled!
    </button>
  );
}

//          Edit <code>src/App.js</code> and save to reload.

function App() {
  return (
    <div className="App">
      <button className='b2'>p-button</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ScheduleMe!
        </p>
        <a
          className="App-link"
          href="https://youtu.be/nEQhafa37-c"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn How To Create A Website On React JS.
        </a>
      </header>
      <Button1/>
    </div>
    
  );
}

export default App;
