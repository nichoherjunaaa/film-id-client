import React from 'react'

const CardDetail = ({ image, title, description, popularity }) => {
    return (
        <>
            <div className="card shadow-lg bg-base-100 max-w-4xl">
                <div className="flex">
                    <figure className="w-300 h-160 overflow-hidden">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${image}`}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </figure>
                    <div className="card-body items-center">
                        <h2 className="card-title text-center">{title}</h2>
                        <p className="line-clamp-3">{description}</p>
                        <button className="btn btn-primary w-full">Buy</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardDetail