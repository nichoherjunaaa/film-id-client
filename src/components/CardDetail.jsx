import React from 'react'

const CardDetail = ({ image, title, description, popularity }) => {
    return (
        <>
            <div className="card shadow-lg bg-base-100 max-w-4xl">
                <div className="flex">
                    <figure className="w-500 h-160 overflow-hidden">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${image}`}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </figure>
                    <div className="card-body items-center justify-between">
                        <div className="flex flex-col h-fulltext-justify">
                            <h2 className="card-title text-center">{title}</h2>
                            <p className="line-clamp-3">{description}</p>
                            <p className="">Views: {popularity}</p>
                        </div>
                        <button className="btn btn-primary w-full">Buy</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardDetail