import React from 'react'
import Carousel from '../components/Carousel'
import { nowPlayingMovie, topRatedMovie } from '../api/api'
import { useEffect, useState } from 'react'
import Loading from './../components/Loading';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
const HomePage = () => {
    const [topMovies, setTopMovies] = useState([]);
    const [nowMovies, setNowMovies] = useState([]);
    const [loading, isLoading] = useState(true);
    const fetchTopMovie = async (req, res) => {
        const response = await topRatedMovie(1);
        if (response?.data?.results) {
            setTopMovies(response.data.results);
        }
        isLoading(false);
    }

    const fetchNowMovie = async (req, res) => {
        const response = await nowPlayingMovie(1);
        if (response?.data?.results) {
            setNowMovies(response.data.results);
        }
        isLoading(false);
    }

    useEffect(() => {
        fetchTopMovie();
        fetchNowMovie();
    }, [])

    return (
        <>
            <div className="">
                <Carousel />
                <div className="content">
                    <h3 className="text-xl font-bold mb-3 mt-10">Top Rate Movies</h3>
                    {
                        loading ? (
                            <Loading />
                        ) : (
                            topMovies.length > 0 ? (
                                <>
                                    {/* Movie Cards */}
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                                        <Card movies={topMovies.slice(0, 4)} />
                                    </div>
                                </>
                            ) : (
                                <div className="text-center mt-10">
                                    <h1 className="text-xl font-bold">No movies found</h1>
                                    <p>Please check your internet connection or try again later.</p>
                                </div>
                            )
                        )
                    }
                    <h3 className="text-xl font-bold mb-3 mt-10">Now Playing</h3>
                    {
                        loading ? (
                            <Loading />
                        ) : (
                            nowMovies.length > 0 ? (
                                <>
                                    {/* Movie Cards */}
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                                        <Card movies={nowMovies.slice(0, 4)} />
                                    <Link to="/movies" className="btn btn-accent my-5 rounded-full">See Other Movies</Link>
                                    </div>
                                </>
                            ) : (
                                <div className="text-center mt-10">
                                    <h1 className="text-xl font-bold">No movies found</h1>
                                    <p>Please check your internet connection or try again later.</p>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default HomePage
