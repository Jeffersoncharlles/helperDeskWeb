import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './contexts/auth'
import { Routes } from './routes'
import firebase from './services/firebaseConnection'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {


  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          // rtl={false}
          pauseOnFocusLoss={false}
          // draggable
          pauseOnHover={false}
        />
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
