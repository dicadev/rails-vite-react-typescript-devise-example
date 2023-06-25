import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/Home'

const App = (): JSX.Element => {
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
