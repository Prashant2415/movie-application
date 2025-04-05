import React from 'react'
import "./pages.css"
import { BorderedSubHeading } from '../selfcomponent/Text/CommonText'
import { AboutUSData, greeting } from '../AboutUsData'
const About = () => {
  window.scrollTo({top:0, behavior: "smooth"})
  const aboutusData = AboutUSData;
  const aboutusGreeting = greeting;
  return (
    <div className='aboutus-container'>
      <BorderedSubHeading>About Us</BorderedSubHeading>
      <div className="aboutus-content-container">
        {aboutusData.map((d) => (
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
