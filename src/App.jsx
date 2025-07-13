import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import Navbar from './components/NavBar'
import Favorites from './pages/Favorites'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
