import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {getMovie} from './api.js';

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getMovie()
  }, [])

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <h2>Film Terbaru</h2>
      <ul>
        {films.length > 0 ? (
          films.map((film, index) => (
            <li key={index}>{film.title}</li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </>
  );
}

export default App;
