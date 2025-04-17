import React from 'react'
import Card from '../../components/Card';

const MovieSection = ({ title, movies }) => (
    <div className="mt-10">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        {movies.length > 0 ? (
            <>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    <Card movies={movies.slice(0, 4)} />
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


export default MovieSection