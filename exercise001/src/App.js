import './App.css';
import Header from './Header';

function App() {
  const handleNameChange = () => {
    const names =["Vitor", "Selena", "Paula", "Anthony"];
    const index = Math.floor(Math.random() * 4);
    return names[index];
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleNameChange()}!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
