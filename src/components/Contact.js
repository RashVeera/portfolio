import React from 'react'
import linkedinIcon from "../assets/linkedinIcon.png"
import githubIcon from "../assets/githubIcon.png"
import emailIcon from "../assets/emailIcon.png"

const Contact = () => {
  return (
    <footer id='contact' className='contactContainer'>
        <div className='contactPlaceholders'>
        <h3>Contact</h3>
        <p>Feel free to reach out!</p>
        </div>
        <ul className='contactLinksContainer'>
            <li>
                <img src={emailIcon} alt='LinkedInIcon'/>
                <a href='mailto:rashikaveera@gmail.com'>rashikaveera@gmail.com</a>
            </li>
            <li>
                <img src={linkedinIcon} alt='LinkedInIcon'/>
                <a href='https://www.linkedin.com/in/rashika-v-87b309150/'>linkedin.com/rashikaveera</a>
            </li>
            <li>
                <img src={githubIcon} alt='LinkedInIcon'/>
                <a href='https://github.com/RashVeera'>github.com/rashikaVeera</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact