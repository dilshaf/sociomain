import React from 'react'

// import AppRouter from './routes/AppRouter'
// import { AuthContext } from './context/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Home from './containers/Home/Home';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/register' element={<SignUp/>}  />
     
      <Route path="/home" element={<Home />}/>
       
     
    </Routes>
  </BrowserRouter>

  )
}

export default App