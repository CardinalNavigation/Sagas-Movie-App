import { HashRouter as Router, Route } from 'react-router-dom';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';

function App() {
  return (
    <div className="text-center text-stone-900 bg-stone-200">
      <h1 className="text-5xl font-bold underline text-emerald-900">The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/details/:id" exact>
          <Details />
        </Route>
      </Router>
    </div>
  );
}


export default App;
