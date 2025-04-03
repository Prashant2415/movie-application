import React, { useState } from 'react'
import "./pages.css"
import {useSelector} from "react-redux"
import { BorderedSubHeading, SubHeading } from '../selfcomponent/Text/CommonText'
import Card from '../selfcomponent/card/Card'
const Movies = () => {
  const movieData = useSelector((state)=> state.movieSlice.movieData)
  const categoryData = [...new Set(movieData.flatMap((item)=> item.genre))]
  const [searchInput, setSearchInput] = useState("")
  const [selectCategory, setSelectCategory] = useState(null)
  const handleInputSearch=(event)=>{
    setSearchInput(event.target.value)
  }
  const handleFilter=(category)=>{
    setSelectCategory(category)
  }
  const filterData = movieData.filter((item)=>{
    const matchSearch = item.title.toLowerCase().includes(searchInput.toLowerCase());
    const matchCategory = selectCategory ? item.genre.includes(selectCategory) : true;
    return matchSearch && matchCategory;
  });

  
  return (
    <div className='movie-container'>
      <BorderedSubHeading>Movies</BorderedSubHeading>
      <div className="search-filter-container">
        <form>
          <input className='search-input' type="text" placeholder='Search by name...' value={searchInput} name='searchInput' onChange={handleInputSearch}/> <br />
        </form>
        <div className="movie-filter-button-container">
          {categoryData.map((category,index)=>(
            <button className='filter-button' key={index} onClick={()=>{handleFilter(category)}}>{category}</button>
          ))}
        </div>
      </div>
      <div className="movie-item-container">
          {filterData.map((data)=>(
            <Card data={data}/>
          ))}
      </div>
    </div>
  )
}

export default Movies
