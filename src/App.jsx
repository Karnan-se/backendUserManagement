import { useState } from 'react'
import Login from './pages/admin/login'
import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { store } from './store/reduxStore'
import { Provider } from 'react-redux'





function App() {


  return (
    <>
    <Provider store={store}> 
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>

        
      </Routes>
    </Router>
    </Provider>
   
    </>
  )
}

export default App
