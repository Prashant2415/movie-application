import React from 'react'
import "./layout.css"
import { Link } from 'react-router'
const Footer = () => {
  return (
    // <footer className="footer">
    //   <div className="footer-content">
    //     <p>© 2025 MovieMania. All rights reserved.</p>

    //     <div className="footer-links">
    //       <a href="/">Home</a>
    //       <a href="/movies">Movies</a>
    //       <a href="/about">About</a>
    //       <a href="/contact">Contact</a>
    //     </div>

    //     <div className="footer-socials">
    //       <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
    //       <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
    //       <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
    //     </div>

    //     <p className="footer-credit">Made with ❤️ by Prashant Mendhe</p>
    //   </div>
    // </footer>
    <footer className='footer-container'>
      <div className="footer-content-container">
        <p className='copyright'>© 2025 PMMovies. All rights reserved.</p>
        <div className="footer-nav-link">
          <div className="footer-nav-link-container">
          <Link className='footer-nav-link' to="/">Home</Link>
          <Link className='footer-nav-link' to="/movies">Movies</Link>
          <Link className='footer-nav-link' to="/about">About</Link>
          </div>
          {/* <p className="footer-credit">Made with ❤️ by Prashant Mendhe</p> */}
        </div>
        <p className="footer-credit">Made with ❤️ by Prashant Mendhe</p>
      </div>
    </footer>

  )
}

export default Footer
