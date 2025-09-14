import React, { useState ,useEffect} from "react";
import { Link } from 'react-router-dom'
import { RiImageAddLine } from "react-icons/ri"
import { IoSettingsOutline } from "react-icons/io5"
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import { BiLogOut} from "react-icons/bi"

 
export const User = () => {
    const user = true

    const [profileOpen,setProfileOpen] =useState(true)

    const close = () =>{
        setProfileOpen(false)
    };
    

useEffect(() => {
  const profileBtn = document.querySelector(".profile .img");

  if (!profileBtn) return;

  const toggleNav = () => {
    document.body.classList.toggle("nav-open");
  };

  profileBtn.addEventListener("click", toggleNav);

   document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
    });
  });

  // Cleanup to prevent duplicate listeners
  return () => {
    profileBtn.removeEventListener("click", toggleNav);
  };
}, []);



    
    return (
    <>
    <div className='profile'>
        { user ?  (
            <>
        <button className='img' onClick={()=>setProfileOpen(!profileOpen)}>
            <img src='https://images.pexels.com/photos/31215331/pexels-photo-31215331.jpeg'alt='images' />
        </button>
       
        {profileOpen && ( 
        <div className="openProfile boxItems" onClick={close}>
            <Link to ='/account'>
            <div className="image">
                <div className="img">
                    <img src='https://images.pexels.com/photos/31215331/pexels-photo-31215331.jpeg' alt='images' />
                </div>
                <div className="text">
                    <h4>Golda Princy</h4>
                    <p>TamilNadu,India</p>
                </div>
            </div>
            </Link>
            {/*<Link to ='/create'>
            <button className="box">
                <RiImageAddLine  className='icon'/>
                <h4> Create Post</h4>
            </button>
            </Link>*/}
            
            <button className="box">
                <IoSettingsOutline className='icon' />
                <h4> My Account</h4>
            </button>

            
          </div>
        )}
       </>
      ) : (
      <Link to='/login'>
      <button>My Account</button>
      </Link>
      )}
    </div>
    </>
    )

}