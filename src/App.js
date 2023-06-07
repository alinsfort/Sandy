 
import './App.scss';
import {MemoizedMovieList as Movies} from './components/MovieList';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import MovieTrailer from './pages/MovieTrailer';


function App() {
  return (
    <div className="App"> 
      <Routes>
          <Route path='*' element={<Movies/>}/>
           
      </Routes> 
    </div>
  );
}

export default App;
