import './App.css'
import { MovieData } from './component/MovieData'

function App() {
  const data = MovieData
  return (
    <>
      <h1>Movie application</h1>
      {
        data.map((d)=>{
          return(
            <img className='image' src={d.image_link} alt={d.title}/>
          )
        })
      }
    </>
  )
}

export default App
