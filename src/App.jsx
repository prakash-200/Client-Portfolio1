
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeComponent from './components/HomeComponent'

function App() {
  
  return (
    <Router>
      <Routes>
      <Route path="/Client-Portfolio1" element={<HomeComponent />} />
      </Routes>
    </Router>
  )
}

export default App
