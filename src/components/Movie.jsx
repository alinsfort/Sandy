import React from 'react';

const Movie = ({title,img, overview,tagline, genres}) => {
    return <>
        <div className='movie-card'>
            <div className='movie-image'>
                <img src={img || "https://placehold.co/600x400"} />
            </div>
            <div className='movie-details'>
                <div className='movie-title'>
                    <h3>{title}</h3>
                </div>
                <div className='movie-genre'>
                    <p>Adventure, Action, Comedy</p>
                </div>
                <div className='summary'>
                    <p className='summary-title'>Summary</p>
                    <p className='description'>{tagline || "Check online"}</p>
                </div>
                <button className='download-button'>Download</button>
            </div>
        </div>
    </>
}

export default Movie;
