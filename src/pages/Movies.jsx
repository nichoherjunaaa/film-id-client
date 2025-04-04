import React from 'react'
import { getMovie } from '../api/api.js';
import { useState, useEffect } from 'react';
import Card from './../components/Card';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMovie = async () => {
        try {
            const response = await getMovie();
            // console.log(response.data.results);
            setMovies(response.data.results);
            if (response && response.data && response.data.results) {
                setMovies(response.data.results);
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
    return (
        <>
            {
                loading ? (
                    <div>Loading...</div>
                ) : movies && movies.length > 0 ? (
                    <>
                    <div className="grid grid-cols-4 justify-center">
                        <Card movies={movies} />
                    </div>
                    </>
                ) : (
                    <div>
                        <h1>No movies found</h1>
                        <p>Please check your internet connection or try again later.</p>
                    </div>
                )
            }
        </>
    )
}

export default Movies