import React from 'react'
import "./layout.css"
import { Link } from 'react-router'
const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className="footer-content-container">
        <p className='copyright'>© 2025 PMMovies. All rights reserved.</p>
        <div className="footer-nav-link">
          <div className="footer-nav-link-container">
          <Link className='footer-nav-link' to="/">Home</Link>
          <Link className='footer-nav-link' to="/movies">Movies</Link>
          <Link className='footer-nav-link' to="/about">About</Link>
          </div>
        </div>
        <p className="footer-credit">Made with ❤️ by Prashant Mendhe</p>
      </div>
    </footer>

  )
}

export default Footer
