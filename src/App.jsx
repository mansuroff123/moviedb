import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return <>
    <MovieCard movie={{title: "Joe's film", release_date: 2020}}/>
    <MovieCard movie={{title: "Tim's film", release_date: 2025}}/>
  </>
}

export default App
