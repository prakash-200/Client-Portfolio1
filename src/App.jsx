
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeComponent from './components/HomeComponent'
import PageFlipComponent from './components/PageFlipComponent'
import ProjectComponent from './components/ProjectComponent'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/Client-Portfolio1" element={<HomeComponent />} />
        <Route path="/flip" element={ <PageFlipComponent /> } />
        <Route path="/project" element={ <ProjectComponent /> } />
      </Routes>
    </Router>
  )
}

export default App
