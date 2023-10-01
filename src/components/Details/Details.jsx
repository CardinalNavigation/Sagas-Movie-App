import MovieList from "../MovieList/MovieList"
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Details() {

    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);
    const params = useParams();
    console.log("Params .Id:", params.id)
    // console.log("Props Key:", props)
    // console.log("Genres Arrray:", genres)
    console.log("Movies Arrray:", movies)
    // console.log("Digging Into Movies:", movies[0])

    /* Params Starts with 1, so we are doing params.id-1 to get something from our array
    // However the array is not in sequential ID order since it is pulled from the DB by Name
    alphabetically. We need to find an alternative that pulls the information by ID#
    One option is to loop over the array and get all the id's out. (MAP?) 
    We went for a array.find() method to match up the params and the ID so they tracked with eachother**/

    const findIDFunction = (movie) => {
        // console.log(movie.id)
        // console.log(params.id)
        return movie.id == params.id
    }

    const currentMovie = movies.find(findIDFunction)
    console.log("Find Correct Movie ID:", currentMovie)

    // Below did NOT work:
    // let  currentMovie= params.id - 1
    // console.log("Current Movie", currentMovieId)
    // let currentMovie = movies[currentMovieId]
    // console.log("Current Movie:", currentMovie)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES', payload: params.id });
    }, []);


    return (
        <>
            <div>
                <h1>{currentMovie.title}</h1>
                <img src={currentMovie.poster}></img>
                <h3>Genres:</h3>
                {genres.map(genre => {
                    return (
                        <p>{genre.name}</p>
                    );
                })}
                <h3>Description:</h3>
                <p>{currentMovie.description}</p>
            </div>
            <Link to={`/`}>
                <button>Back To Movies</button>
            </Link>
        </>
    )
}

export default Details