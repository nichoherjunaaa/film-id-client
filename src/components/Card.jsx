import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ movies }) => {
    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/detail/${id}`)
        console.log('ok');
        
    }

    return (
        <>
            {movies.map(movie => (
                <div className="card bg-base-100 shadow-sm" key={movie.id}>
                    <figure className="w-full aspect-[2/3] overflow-hidden cursor-pointer
                    " onClick={() => handleClick(movie.id)}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt="Shoes"
                            className="w-full h-full object-cover"
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