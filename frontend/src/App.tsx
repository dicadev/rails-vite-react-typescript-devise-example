import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from './axios'
import './App.css'

import HomePage from './pages/HomePage'

const App = (): JSX.Element => {
  useEffect(() => {
    axios.get('http://localhost:3000/session')
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
