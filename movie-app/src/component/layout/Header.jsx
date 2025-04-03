import React from 'react'
import "./layout.css"
import {Link, useLocation} from "react-router-dom"
const Header = () => {
  const location = useLocation();
  return (
    <div className='header-container'>
      <h2 className='logo'>PMovies</h2>
      <nav className='nav-container'>
        <ul className='nav-ul'>
          <li className='nav-li'>
            <Link className={`nav-link ${location.pathname == "/" ? "active" : ""}`} to="/">Home</Link>
          </li>
          <li>
            <Link className={`nav-link ${location.pathname == "/movies" ? "active" : ""}`} to="/movies">Movies</Link>
          </li>
          <li>
            <Link className={`nav-link ${location.pathname == "/about" ? "active" : ""}`} to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <button className='primary-button'>
        <Link className='button' to="/watchlist">Watchlist</Link>
      </button>
    </div>
  )
}

export default Header
