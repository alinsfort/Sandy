 
import './App.scss';
import {MemoizedMovieList as Movies} from './components/MovieList';
import { Route, Routes } from 'react-router-dom';
import MovieTrailer from './pages/MovieTrailer';


function App() {
  return (
    <div className="App"> 
      <Routes>
          <Route path='/' element={<Movies/>}/>
          <Route exact path='/:id' element={<MovieTrailer/>}/> 
      </Routes>
    </div>
  );
}

export default App;
