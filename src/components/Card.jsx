import React from 'react'

const Card = ({ movies }) => {
    return (
        <>
            {movies.map(movie => (
                <div className="card bg-base-100 shadow-sm" key={movie.id}>
                    <figure className="w-full h-3/4">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt="Shoes"
                            className="w-full h-full object-contain"
                        />
                    </figure>
                    <div className="card-body items-center">
                        <h2 className="card-title text-center">{movie.title}</h2>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card