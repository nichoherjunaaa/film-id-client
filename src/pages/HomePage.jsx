import React from 'react'
import Carousel from '../components/Carousel'
import { topRatedMovie } from '../api/api'
import { useEffect, useState } from 'react'
import Loading from './../components/Loading';
import Card from '../components/Card';
const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, isLoading] = useState(true);
    const fetchTopMovie = async (req, res) => {
        const response = await topRatedMovie(1);
        if (response?.data?.results) {
            setMovies(response.data.results);
        }
        isLoading(false);
    }

    useEffect(() => {
        fetchTopMovie();
    }, [])

    return (
        <>
            <div className="">
                <Carousel />
                <div className="content mt-5">
                    <h3 className="text-xl font-bold mb-3">Top Rate Movies</h3>
                    {
                        loading ? (
                            <Loading />
                        ) : (
                            movies.length > 0 ? (
                                <>
                                    {/* Movie Cards */}
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                                        <Card movies={movies.slice(0, 4)} />
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
