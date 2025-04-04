import React from 'react'
import "./pages.css"
import { BorderedSubHeading } from '../selfcomponent/Text/CommonText'
const About = () => {
  const dummy = [
    {
      id: 1,
      title: "🎬 About Us",
      description: "Welcome to PM Movie Application, your one-stop destination for everything movies! We created this platform out of our love for cinema — to make discovering, exploring, and saving your favorite films easier and more enjoyable.",
      list: ""
    },
    {
      id: 2,
      title: "What You Can Do Here?",
      description: "",
      list: [
        {
          id: 1,
          listItem: "🔍 Search for movies by title or genre"
        },
        {
          id: 2,
          listItem: "🎞️ Browse detailed information about each movie"
        },
        {
          id: 3,
          listItem: "❤️ Add to Watchlist to save movies you're excited to see"
        },
        {
          id: 4,
          listItem: "🧹 Filter by Genre to find exactly what you're in the mood for"
        }
      ]
    },
    {
      id: 3,
      title: "👨‍💻 Built With Passion",
      description: "This application was crafted as a project to combine great UI with practical features. Whether you're a casual viewer or a movie buff, we want you to have a seamless experience."
    }
  ]

  const greeting = {
    greet: "🙌 Thank You",
    message: "Thank you for visiting! We hope you enjoy using our app as much as we enjoyed building it."
  }
  return (
    <div className='aboutus-container'>
      <BorderedSubHeading>About Us</BorderedSubHeading>
      <div className="aboutus-content-container">
        {dummy.map((d) => (
          <div className={`aboutus-content ${d.id%2 === 0 ? "content-left": "content-right"}`} key={d.id}>
            <h2 className='aboutus-subtitle'>{d.title}</h2>
            <div className="aboutus-description-list">
              {d.description ? (
                <p className='aboutus-description'>{d.description}</p>
              ) : (
                <ul className='aboutus-ul'>
                  {d.list.map((l) => (
                    <li className='aboutus-li' key={l.id}>{l.listItem}</li>
                  ))}
                </ul>
              )}

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
