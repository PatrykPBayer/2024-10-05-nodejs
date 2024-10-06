import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { getData, postData } from "./services/services";

function App() {
  useEffect(() => {
    getData()
      .then((data) => console.log(data.data)) //tylko data nas interesuje
      .catch((error) => console.error("Nasz blad: ", error));
  }, []);

  const handleClick = () => {
    postData()
      .then((data) => console.log(data.data))
      .catch((error) => console.error("Nasz blad: ", error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>Wyślij POST</button>
      </header>
    </div>
  );
}

export default App;
