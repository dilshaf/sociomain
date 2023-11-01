
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './Components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import ViewForm from './Components/ViewForm'
import Update from './Components/Update'

// axios.defaults.baseURL='http:localhost:7000'
// axios.defaults.withCredentials=true

const App = () => {
  return (
    <div>
      <Navbar/>
      <Toaster position='top-center' toastOptions={{duration:2000}}/>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/details' element={<ViewForm/>}/>
        <Route path='/update/:id' element={<Update/>}/>

      </Routes>
    </div>
  )
}

export default App