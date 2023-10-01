import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <section className="flex flex-wrap space-x-4">
                {movies.map(movie => {
                    return (
                        <Link key={movie.id} to={`/movies/details/${movie.id}`}>
                            <div className="card rounded-none text-center" key={movie.id} >
                                <h3 className='text-orange-900 text-xl my-8'>{movie.title}</h3>
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