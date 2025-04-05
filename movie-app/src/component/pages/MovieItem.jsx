import React from 'react'
import "./pages.css"
import { BorderedSubHeading } from '../selfcomponent/Text/CommonText'
import { useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { addToWatchlist } from '../../redux/movieSlice'
import CastingCard from '../selfcomponent/card/CastingCard'
const MovieItem = () => {
  const location = useLocation();
  window.scrollTo({top:0, behavior: "smooth"})
  const item = location?.state
  const dispatch = useDispatch();
  const watchListData = useSelector((state) => state.movieSlice.watchListData);

  const inWatchList = watchListData.some((i) => i.id === item.id);

  const { title, plot, year, genre, trailer, image_link, rating, runtime, awards, boxOffice, language, production, director, actors } = item;
  const handleAddToWatchlist = (data) => {
    dispatch(addToWatchlist(data))
  }

  return (
    <div className='item-container'>
      <BorderedSubHeading>{title}</BorderedSubHeading>
      <div className="item-content-container">
        <div className="trailer-container">
          <video className='trailer-content' autoPlay muted loop>
            <source src={`./src/assets/movies/${trailer}.mp4#t=30`} />
          </video>
        </div>
        <div className="movieitem-content-container">
          {/* <img className='item-image' src={image_link} alt={title} /> */}
          <div className="movieitem-content">
            <div className="movie-item-content-container">
            <h2 className='item-title ptag-margin'>{`${title} (${year})`}</h2>
            <p className='item-genre '>{genre.join("/")}</p>
            <p className='item-plot ptag-top'>{plot}</p>
            <p className='item-common-content'><strong className='strong-text'>Runtime</strong>{runtime} mins.</p>
            <p className='item-common-content'><strong className='strong-text'>Awards</strong>{awards}</p>
            <p className='item-common-content'><strong className='strong-text'>Box Office</strong>{boxOffice}</p>
            <p className='item-common-content'><strong className='strong-text'>Language</strong>{language}</p>
            <p className='item-common-content'><strong className='strong-text'>Production</strong>{production}</p>
            </div>
            <div className="button-item-container">
              <p className='item-rating ptag-margin'>Rating <span className='rating'>{rating}</span>/10</p>
              <button className={`addtowatch ${inWatchList ? "button-disable" : ""}`} onClick={() => { handleAddToWatchlist(item) }}>{inWatchList ? "Added to Watchlist" : "Add to watchlist"}</button>
            </div>
          </div>
        </div>
      </div>
      <div className="casting-container">
            <div className="director">
              {director && (
                <CastingCard data={director}/>
              )}
            </div>
            <div className="actors">
              {
                actors.map((actor) => (
                  <CastingCard data={actor}/>
                ))
              }
            </div>
          </div>
    </div>
  )
}

export default MovieItem
