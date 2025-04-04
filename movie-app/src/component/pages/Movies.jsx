import React, { useState } from 'react'
import "./pages.css"
import { useDispatch, useSelector } from "react-redux"
import { BorderedSubHeading, SubHeading } from '../selfcomponent/Text/CommonText'
import Card from '../selfcomponent/card/Card'
import { addToWatchlist } from '../../redux/movieSlice'
import { useNavigate } from 'react-router'
const Movies = () => {
  const movieData = useSelector((state) => state.movieSlice.movieData)
  const categoryData = [...new Set(movieData.flatMap((item) => item.genre))]
  const [searchInput, setSearchInput] = useState("")
  const [selectCategory, setSelectCategory] = useState(null)
  const [flag, setFlag] = useState(false)

  const disptach = useDispatch();
  const watchListData = useSelector((state)=> state.movieSlice.watchListData)
  const navigate = useNavigate();
  
  const handleInputSearch = (event) => {
    setSearchInput(event.target.value)
  }
  const handleFilter = (category) => {
    setSelectCategory(category)
    setFlag(true)
  }
  const filterData = movieData.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(searchInput.toLowerCase());
    const matchCategory = selectCategory ? item.genre.includes(selectCategory) : true;
    return matchSearch && matchCategory;
  });

  const handleClearFilter =()=>{
    setSelectCategory(null);
    setFlag(false);
  }
  
  const handleWatchlistData=(data)=>{
    disptach(addToWatchlist(data))
  }

  const handleViewMovie =(movieItem)=>{
    navigate("/movieItem", {state: movieItem})
  }
  return (
    <div className='movie-container'>
      <BorderedSubHeading>Movies</BorderedSubHeading>
      <div className="search-filter-container">
        <form>
          <input className='search-input' type="text" placeholder='Search by name...' value={searchInput} name='searchInput' onChange={handleInputSearch} /> <br />
        </form>
        {flag && (
          <div className="clear-filter">
            <button className='clear-filter-button' onClick={handleClearFilter}>Cear filter</button>
          </div>
        )}
        <div className="movie-filter-button-container">
          {categoryData.map((category, index) => (
            <button className={`filter-button ${selectCategory === category ? "active-highlight" : ""}`} key={index} onClick={() => { handleFilter(category) }}>{category}</button>
          ))}
        </div>
      </div>
      <div className="movie-item-container">
        {filterData.map((data) => (
          <Card data={data} 
          onClickAddtoWatchlist={handleWatchlistData}
          inWatchList={watchListData.some((item)=> item.id === data.id)}
          onClickView={handleViewMovie}/>
        ))}
      </div>
    </div>
  )
}

export default Movies
