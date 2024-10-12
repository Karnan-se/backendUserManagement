import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { userLogout } from '../../features/userAuthSlice';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useGetUserDataQuery, useLogoutMutation } from '../../features/userApiSlice';





export default function ProfilePic(){


  const {data, isLoading, isSuccess}= useGetUserDataQuery()
 

  let profilePics
  if(isSuccess && data.userData){
    console.log(data, "data");
    console.log(data.userData.ProfilePicture, "proPic")
    profilePics= data.userData.ProfilePicture ? `http://localhost:3000${data.userData.ProfilePicture}`: "http://localhost:3000/uploads/avatar.jpeg"
  }


  const dispatch = useDispatch();
  const [logout]= useLogoutMutation()
  const navigate = useNavigate()

 

   
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleMenu = () => {
          setIsOpen(!isOpen);
        };

        const handleLogout = async(e)=>{
          e.preventDefault();
          try{
          dispatch(userLogout());
          const res = await logout().unwrap();
          console.log(res)
          if(res){
            navigate("/user/login")

          }
          }catch(e){
            console.log(e.message);
          }

        }

    return(
        <>
         <OutsideClickHandler onOutsideClick={() => setIsOpen(false)} >
      <div className="relative ml-3">
        <div>
          <button
            type="button"
            className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={toggleMenu}
          >
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src={profilePics}
              alt="User Avatar"
            />
          </button>
        </div>

        {/* Dropdown menu */}
        {isOpen && (
          <div
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
          >
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
              Your Profile
            </a>
            <NavLink  className="block px-4 py-2 text-sm text-gray-700" role="menuitem" onClick={handleLogout}>
              Sign out 
            </NavLink>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  
        </>
    )
}