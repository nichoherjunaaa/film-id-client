import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { getMovie } from './utils/api.js';

function App() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovie = async () => {
    try {
      const response = await getMovie();
      // console.log(response.data.results);
      setFilms(response.data.results);
      if (response && response.data && response.data.results) {
        setFilms(response.data.results);        
      } else {
        console.error('Unexpected response structure:', response);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();    
  }, []);

  const [count, setCount] = useState(0);

  return (
    <>
      {
        films.length > 0 ? (
          <div>
            <h1>Top Films</h1>
            <ul>
              {films.map((film) => (
                <li key={film.id}>{film.title}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )
      }
    </>
  );
}

export default App;

