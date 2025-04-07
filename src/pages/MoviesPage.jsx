import React, { useState, useEffect } from 'react';
import { getMovie } from '../api/api.js';
import Card from '../components/Card.jsx';

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

    const generatePagination = () => {
        const pages = [];

        if (totalPages <= 10) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);
            if (pagination > 3) pages.push('...');

            const start = Math.max(2, pagination - 1);
            const end = Math.min(totalPages - 1, pagination + 1);

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            if (pagination < totalPages - 2) pages.push('...');
            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <div className="px-4 py-6">
            {loading ? (
                <div className="text-center">Loading...</div>
            ) : movies.length > 0 ? (
                <>
                    {/* Movie Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        <Card movies={movies} />
                    </div>

                    {/* Smart Pagination */}
                    <div className="flex justify-center mt-10 flex-wrap gap-2">
                        {generatePagination().map((page, index) =>
                            page === '...' ? (
                                <span key={index} className="btn btn-sm btn-disabled">
                                    ...
                                </span>
                            ) : (
                                <button
                                    key={page}
                                    onClick={() => setPagination(page)}
                                    className={`btn btn-sm join-item ${pagination === page ? 'btn-active' : ''}`}
                                >
                                    {page}
                                </button>
                            )
                        )}
                    </div>
                </>
            ) : (
                <div className="text-center mt-10">
                    <h1 className="text-xl font-bold">No movies found</h1>
                    <p>Please check your internet connection or try again later.</p>
                </div>
            )}
        </div>
    );
};

export default MoviesPage;
