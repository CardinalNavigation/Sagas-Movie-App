import MovieList from "../MovieList/MovieList"
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Details() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const params = useParams();

    return (
        <>
            <p>You are in Movies/Details!</p>
            <p>Params Object: {JSON.stringify(params)}</p>
            <p>{params.movie.description}</p>
        </>
    )
}

export default Details