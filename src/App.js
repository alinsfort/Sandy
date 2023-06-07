 
import './App.scss';
import {MemoizedMovieList as Movies} from './components/MovieList';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <Movies/>
    </div>
  );
}

export default App;
