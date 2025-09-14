import React, { useState, useEffect } from "react"
import { nav } from "../../assets/data/data"
import logo from "../../assets/images/logo.svg"
import "./header.css"
import { Link } from "react-router-dom"
import { User}  from "./User"

 
export const Header = () => {
     const [menuOpen, setMenuOpen] = useState(false)

    window.addEventListener("scroll",function(){
        const header= this.document.querySelector(".header")
        header.classList.toggle("active",this.window.scrollY> 100)

    })
    return (
    <>
    <header className='header'>
        <div className='scontainer flex'>
            <div className='logo'>
                <img src={logo} alt='logo' width='100px' />
            </div>
            <nav>
                <ul>
                    {nav.map((link) => (
                    <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
                ))}
                <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
              <Link to="/create">Create Post</Link>
          </li>
        </ul>
            </nav>
            <div className="account flexCenter"
                onClick={() => setMenuOpen(!menuOpen)}
                >       

                <User />
                
            </div>
        </div>

    </header>
    <section></section>
    </>
        
    )    

}
