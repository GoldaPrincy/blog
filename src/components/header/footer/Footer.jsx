import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

export const Footer = () => {
  return (
    <>
      <footer className='boxItems'>
        <div className='container flex'>
          <p>Gardening Blog - All right reserved - Design & Developed by Golda Princy</p>
          <div className='social'>
            <a href="https://facebook.com/golda-princy" target="_blank" rel="noopener noreferrer">
              <BsFacebook className='icon' />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <RiInstagramFill className='icon' />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <AiFillTwitterCircle className='icon' />
            </a>
            <a href="https://linkedin.com/in/golda-princy-p-4ba797275?trk=contact-info" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className='icon' />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}