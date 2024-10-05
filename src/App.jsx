import { useState } from 'react'
import Login from './pages/admin/login'
import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { store } from './store/reduxStore'
import { Provider } from 'react-redux'
import AdminPrivateRoute from './pages/admin/adminPrivateRoute'
import Registration from './pages/admin/register'





function App() {


  return (
    <>
    <Provider store={store}> 
    <Router>
      <Routes>
        <Route path='/admin/login' element={<Login/>}></Route>
        <Route path='admin/register' element={<Registration/>}></Route>

        <Route element={<AdminPrivateRoute />} >
        <Route path='/admindashboard'></Route>

        </Route>

        
      </Routes>
    </Router>
    </Provider>
   
    </>
  )
}

export default App
