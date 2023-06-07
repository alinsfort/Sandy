import React, { memo } from 'react';
import SyncLoader from "react-spinners/SyncLoader";
import Movie from './Movie';
import { UseMovies } from '../hooks/useMovies';



const MovieList = () => {


    const {error, loading, data} = UseMovies();

    const {edges:movies} = data?.discover?.movies?.popular || {};

    console.log(error, loading, movies);
    /*
        object.error -> if error
        object.loading -> if loading
        object.data -> if go data
    */
   
    const loadingStyle = {
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        margin:"5rem 0rem"
    }

    if(loading){
        return <SyncLoader color="#ffe013" margin={10} size={20} style={loadingStyle}/>
    }

    if(error){
        return <div>Error...</div>
    }

    return movies.map(({node})=>{
        return <Movie 
                key={crypto.randomUUID()} 
                title={node.title}
                genres={node.genres}
                img={node.poster}
                tagline={node.tagline}
                overview={node.overview}
                />
    })
}

export const MemoizedMovieList = memo(MovieList);
