import { useState } from 'react'
import Login from './pages/login'
import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'





function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>

        
      </Routes>
    </Router>
   
    </>
  )
}

export default App
