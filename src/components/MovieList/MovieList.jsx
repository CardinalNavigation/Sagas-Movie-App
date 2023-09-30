import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useParams, Link } from 'react-router-dom'

function MovieList() {

    const dispatch = useDispatch();
    const params = useParams();
    console.log('This is what Params Looks Like :', params)
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Link className="link-tag"
                            to={`/movies/details/${movie.id}`
                            
                            }>
                            <div key={movie.id} >
                                <h3>{movie.title}</h3>
                                <img src={movie.poster} alt={movie.title} />
                            </div>
                        </Link>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;