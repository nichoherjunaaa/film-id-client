import React from 'react'

const Card = ({ movies }) => {
    console.log(movies);

    return (
        <>
            {movies.map(movie => (
                <div className="card bg-base-100 shadow-sm m-3" key={movie.id}>
                    <figure>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{movie.title}</h2>
                        <p>{movie.overview}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card