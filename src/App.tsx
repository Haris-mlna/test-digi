import React from 'react'
import Home from './pages/Home'

import './App.css'

import { Routes, Route} from 'react-router-dom'

const Dashboard = React.lazy(() => import('./pages/Dashboard'))

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
