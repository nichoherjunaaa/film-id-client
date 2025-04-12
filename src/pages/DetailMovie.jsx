import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailMovie } from '../api/api.js';
import Loading from '../components/Loading.jsx';
import CardDetail from '../components/CardDetail.jsx';

const DetailMovie = () => {
    const { id } = useParams();
    const [movieDetail, setMovieDetail] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetail = async () => {
            try {
                const response = await getDetailMovie(id);
                if (response && response.data) {
                    setMovieDetail(response.data);
                    console.log(response.data);
                    
                } else {
                    console.error('Unexpected response structure:', response);
                    setError('Unexpected response structure');
                }
            } catch (error) {
                console.error('Error fetching movie details:', error);
                setError('Error fetching movie details');
            }
        };

        if (id) {
            fetchMovieDetail();
        } else {
            console.error('Movie ID is null or undefined');
            setError('Movie ID is null or undefined');
        }
    }, [id]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!movieDetail) {
        return <Loading/>;
    }

    return (
        <CardDetail image={movieDetail.poster_path} title={movieDetail.title} description={movieDetail.overview}/>
    );
}

export default DetailMovie;
