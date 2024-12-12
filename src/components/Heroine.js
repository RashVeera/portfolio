import React from 'react'
import heroine from "../assets/heroImage.png"
import myImage from "../assets/myimage.webp"


const Heroine = () => {
  return (
    <section className='heroineContainer'>
        <div className='aboutDetails'>
            <h1 className='heroineTitle'>Hi, I'm Rashika</h1>
            <p className='heroineDescription'> I'm a frontend developer with 3 years of experience using React and Redux and familiar with Nodejs and SQL. 
                Reach out if you'd like to learn more!</p>
            <a className='heroineBtn' href="mailto:rashikaveera@gmail.com" >Contact Me</a>
        </div>
        <img className='heroine' src={myImage} alt="heroine"/>
        <div className='topBlur'/>
        <div className='bottomBlur'/>
    </section>
  )
}

export default Heroine