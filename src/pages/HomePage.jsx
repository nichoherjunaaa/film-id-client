import React from 'react';
import Carousel from '../components/Carousel';
import { nowPlayingMovie, topRatedMovie } from '../api/api';
import { useEffect, useState } from 'react';
import Loading from './../components/Loading';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import MovieSection from './Section/MovieSection';

const HomePage = () => {
    const [topMovies, setTopMovies] = useState([]);
    const [nowMovies, setNowMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [topRes, nowRes] = await Promise.all([
                    topRatedMovie(1),
                    nowPlayingMovie(1)
                ]);

                if (topRes?.data?.results) setTopMovies(topRes.data.results);
                if (nowRes?.data?.results) setNowMovies(nowRes.data.results);
            } catch (error) {
                console.error("Failed to fetch movies", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="">
                <Carousel />
                <div className="content">
                    {loading ? (
                        <Loading />
                    ) : (
                        <>
                            <MovieSection title="Top Rate Movies" movies={topMovies} />
                            <MovieSection title="Now Playing" movies={nowMovies} />
                            <div className="flex">
                                <Link to="/movies" className="btn btn-accent my-5 rounded-full w-md text-base">
                                    See Other Movies
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default HomePage;

