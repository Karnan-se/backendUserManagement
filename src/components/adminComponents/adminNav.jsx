
import { NavLink } from "react-router-dom"
import { logout } from "../../features/authSlice"
import { useDispatch } from "react-redux"
import { useAdminlogoutMutation } from "../../features/adminApiSlice"



export default function NavBarComponent(){

    const dispatch = useDispatch()
    const [adminlogout] =useAdminlogoutMutation()

    const logoutto = async(e)=>{
        e.preventDefault()
        try {

            dispatch(logout());
            const res = await adminlogout().unwrap()
            console.log(res)

 
        } catch (error) {
            console.log(error.message)
            
        }
    }

 return(
  <>
  <nav className="bg-gray-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">

          <div className="flex space-x-4 w-full justify-between">
            <NavLink  className={({isActive})=> isActive?'rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white' : 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'  }>Dashboard</NavLink>
            <NavLink onClick={logoutto}  className={'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ml-auto '  }>LOGOUT</NavLink>

          </div>
        
      
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

        {/* <ProfilePic/> */}

      </div>
    </div>
  </div>


</nav>

  </>
 ) 

}