import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar></Navbar>
     <Home></Home>
    </>
  )
}

export default App
