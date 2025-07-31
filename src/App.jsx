import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { HOME, SERVICE } from './components/routers/router'
import Service from './pages/Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={SERVICE} element= {<Service/>}/>

    </Routes>
      
    </>
  )
}

export default App
