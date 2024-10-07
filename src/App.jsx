import { useState } from 'react'
import Login from './pages/admin/login'
import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { store } from './store/reduxStore'
import { Provider } from 'react-redux'
import AdminPrivateRoute from './pages/admin/adminPrivateRoute'
import Registration from './pages/user/register'
import AdminDashboard from './pages/admin/admindashboard'





function App() {


  return (
    <>
    <Provider store={store}> 
    <Router>
      <Routes>
        <Route path='/admin/login' element={<Login/>}></Route>


        <Route element={<AdminPrivateRoute />} >
        <Route path='/admindashboard' element={<AdminDashboard/>}></Route>

        </Route>

{/* forusers */}
        <Route path='user/register' element={<Registration/>}></Route>
        <Route path='user/login' element={<Registration/>}></Route>

        
      </Routes>
    </Router>
    </Provider>
   
    </>
  )
}

export default App
