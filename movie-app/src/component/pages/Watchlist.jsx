import React from 'react'
import "./pages.css"
import { BorderedSubHeading } from '../selfcomponent/Text/CommonText'
import Card from '../selfcomponent/card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWatchlist } from '../../redux/movieSlice'
import { useNavigate } from 'react-router'
const Watchlist = () => {
  window.scrollTo({top:0, behavior: "smooth"})
  const dispatch = useDispatch();
  const watchlistData = useSelector((state)=> state.movieSlice.watchListData);
  const navigate = useNavigate();
  const handleRemoveFromWatchlist=(data)=>{
    dispatch(removeFromWatchlist(data))
  }
  
  const handleView=(movieItem)=>{
    navigate("/movieItem",{state: movieItem})
  }
  return (
    <div className='watchlist-container'>
      <BorderedSubHeading>Watchlist</BorderedSubHeading>
      {watchlistData.length > 0 ? (
        <div className="watchlist-card-container">
        {watchlistData.map((data)=>(
          <Card data={data} onClickView={handleView} onClickRemoveFromWatchlist={handleRemoveFromWatchlist}/>
        ))}
      </div>
      ) : (
        <div className="empty-data-container">
          <h2 className='empty-data'>No data is added to the watchlist</h2>
        </div>
      )}
    </div>
  )
}

export default Watchlist
