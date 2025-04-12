import React, { useState, useEffect } from 'react';
import { getMovie } from '../api/api.js';
import Card from '../components/Card.jsx';
import Pagination from '../components/Pagination.jsx';
import Loading from '../components/Loading.jsx';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState(1);
    const totalPages = 100;

    const fetchMovie = async () => {
        setLoading(true);
        try {
            const response = await getMovie(pagination);
            if (response?.data?.results) {
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
    }, [pagination]);

    return (
        <div className="px-4 py-6">
            {loading ? (
                <Loading />
            ) : movies.length > 0 ? (
                <>
                    {/* Movie Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        <Card movies={movies} />
                    </div>
                </>
            ) : (
                <div className="text-center mt-10">
                    <h1 className="text-xl font-bold">No movies found</h1>
                    <p>Please check your internet connection or try again later.</p>
                </div>
            )}
            {/* Pagination */}
            <Pagination
                currentPage={pagination}
                totalPages={totalPages}
                onPageChange={(page) => setPagination(page)}
            />
        </div>
    );
};

export default MoviesPage;
