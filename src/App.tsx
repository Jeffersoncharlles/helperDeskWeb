import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes'
import firebase from './services/firebaseConnection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
