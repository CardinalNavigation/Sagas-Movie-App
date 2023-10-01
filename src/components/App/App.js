import { HashRouter as Router, Route } from 'react-router-dom';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';

function App() {
  return (
    <div className="text-center text-cbblue bg-darkgrey">
      <h1 className="text-3xl font-bold underline" bg="#00FFF">The Movies Saga!</h1>
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
