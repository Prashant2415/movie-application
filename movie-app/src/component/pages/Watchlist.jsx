import React from 'react'
import "./pages.css"
import { BorderedSubHeading } from '../selfcomponent/Text/CommonText'
import Card from '../selfcomponent/card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWatchlist } from '../../redux/movieSlice'
const Watchlist = () => {

  const dispatch = useDispatch();
  const watchlistData = useSelector((state)=> state.movieSlice.watchListData);
  
  const handleRemoveFromWatchlist=(data)=>{
    dispatch(removeFromWatchlist(data))
  }
  return (
    <div className='watchlist-container'>
      <BorderedSubHeading>Watchlist</BorderedSubHeading>
      {watchlistData.length > 0 ? (
        <div className="watchlist-card-container">
        {watchlistData.map((data)=>(
          <Card data={data} onClickRemoveFromWatchlist={handleRemoveFromWatchlist}/>
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
