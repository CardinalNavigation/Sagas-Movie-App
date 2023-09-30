import MovieList from "../MovieList/MovieList"
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Details(props) {

    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);
    const params = useParams();
    // console.log(params)
    console.log("Genres Arrray", genres)

    let currentMovieId = params.id - 1
    console.log(currentMovieId)
    let currentMovie = movies[currentMovieId]
    console.log(currentMovie)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES', payload: params.id});
    }, []);


    return (
        <>
            <div>
                <h2>Details</h2>
                <h3>Genres:</h3>
                {genres.map(genre => {
                    return (
                      <p>{genre.name}</p>
                    );
                })}
                <img src={currentMovie.poster}></img>
                <p>{currentMovie.description}</p>
            </div>
            <Link to={`/`}>
                <button>Back To Movies</button>
            </Link>
        </>
    )
}

export default Details