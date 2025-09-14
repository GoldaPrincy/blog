import React from "react"
import {Link} from "react-router-dom"
import back from "../../../assets/images/my-account.jpg"
import "./login.css"

export const Register = () => {
    
  return (
    <>
      <section className='login'>
        <div className='containers'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Register</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form>
            <span>Email address *</span>
            <input type='text' required />
            <span>Username *</span>
            <input type='text' required />
            <span>Password *</span>
            <input type='password' required />
            <span>Confirm Password *</span>
            <input type='password' required />
            <button className='button'>Register</button>
            <Link to='/login'>Login</Link>
          </form>
        </div>
      </section>
    </>
  )
}
