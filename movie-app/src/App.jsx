import { createBrowserRouter } from 'react-router'
import './App.css'
import Template from './component/layout/Template'
import Home from './component/pages/Home'
import Movies from './component/pages/Movies'
import MovieItem from './component/pages/MovieItem'
import Watchlist from './component/pages/Watchlist'
import About from './component/pages/About'
import { RouterProvider } from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Template/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/movies",
          element: <Movies/>
        },
        {
          path: "/movieItem",
          element: <MovieItem/>
        },
        {
          path: "/watchlist",
          element: <Watchlist/>
        },
        {
          path: "/about",
          element: <About/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
