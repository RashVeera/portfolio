import React from 'react'
import aboutImage from "../assets/aboutImage.png"
import cursonIcon from "../assets/cursorIcon.png"
import serverIcon from "../assets/serverIcon.png"
import uiIcon from "../assets/uiIcon.png"
import aboutImage1 from "../assets/aboutImage1.png"


const About = () => {
  return (
    <section id="about" className='aboutSection'>
        <h2>About</h2>
        <div className='aboutContainer'>
            <img src={aboutImage1} alt='aboutImage' />
            <ul className='aboutItems'>
                <li className='aboutItem'>
                    <img src={cursonIcon} alt='cursorIcon'/>
                    <div className='aboutDescription'>
                        <h3>Frontend Developer</h3>
                        <p>Skilled in building responsive and optimized user interfaces using React, Redux, HTML, CSS, and JavaScript.
                        </p>
                    </div>
                </li>
                <li className='aboutItem'>
                    <img src={uiIcon} alt='cursorIcon'/>
                    <div className='aboutDescription'>
                        <h3>Backend Development</h3>
                        <p>Experience with Node.js and Swagger for API development and server-side logic.                       </p>
                    </div>
                </li>
                <li className='aboutItem'>
                    <img src={serverIcon} alt='cursorIcon'/>
                    <div className='aboutDescription'>
                        <h3>Database Development</h3>
                        <p>Strong expertise in SQL, stored procedures, and database version control with Redgate.
                        </p>
                    </div>
                </li>
              
            </ul>
        </div>
    </section>
  )
}

export default About