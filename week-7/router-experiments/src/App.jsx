import { lazy, useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Landing from './components/Landing'

const Dashboard = lazy(() => import('./components/Dashboard'));

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <AppBar />
        <Routes>
          <Route path='/dashboard' element={
            <Suspense fallback={<div>Loading ...</div>}>
              <Dashboard />
            </Suspense>
          } />
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function AppBar() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/')}>Landing</button>
      <button onClick={() => navigate('/dashboard')}>Dashboard</button>
    </div>
  )
}

export default App
