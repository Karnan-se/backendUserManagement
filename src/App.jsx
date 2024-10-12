import { useState } from 'react'
import Login from './pages/admin/login'
import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { store } from './store/reduxStore'
import { Provider } from 'react-redux'
import AdminPrivateRoute from './pages/admin/adminPrivateRoute'
import Registration from './pages/user/register'
import AdminDashboard from './pages/admin/admindashboard'
import UserLogin from './pages/user/userLogin'
import UserPage from './pages/user/userdashBoard'
import UserEdit from './pages/user/userEdit'
import UserPrivateRoute from './pages/user/userPrivateRoute'
import AdminUserEdit from './pages/admin/adminUserEdit'
import NotFound from './pages/user/NotFound'
import AddUser from './pages/admin/adduser'





function App() {


  return (
    <>
    <Provider store={store}> 
    <Router>
      <Routes>
        <Route path='/admin/login' element={<Login/>}></Route>


        <Route element={<AdminPrivateRoute />} >
        <Route path='/admindashboard' element={<AdminDashboard/>}>
        <Route path='/admindashboard/editUser/:userId' element={<AdminUserEdit/>}></Route>
        <Route path='/admindashboard/admin/adduser' element={<AddUser/>}></Route>

        </Route>

        </Route>

{/* forusers */}
        <Route path='user/register' element={<Registration/>}></Route>
        <Route path='user/login' element={<UserLogin/>}></Route>

  {/* protectedRoute */}
        <Route element={<UserPrivateRoute/>}>   
        <Route path='/' element={<UserPage/>}>
        <Route path='/edit'  element={<UserEdit/>}></Route>
        </Route>
        </Route>

        <Route path='*' element={<NotFound/>}></Route>

        
      </Routes>
    </Router>
    </Provider>
   
    </>
  )
}

export default App
