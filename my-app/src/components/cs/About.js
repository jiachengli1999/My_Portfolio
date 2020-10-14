import React, { Component } from 'react'
import '../../styles/About.css'
import profilePic from '../../images/profile_pic.jpg'

class About extends Component{
    render(){
        return(
            <div className='container-flex-about'>
                <div className='title-about'>
                    <h1>About Me</h1>
                </div>
                <div className='skills-about'>
                    <div className='webdev-about'>web dev</div>
                    <div className='mobiledev-about'>Mobile dev</div>
                    <div className='webscraping-about'>web scrape</div>
                    <div className='datacleaning-about'>data clean</div>
                </div>
                <div className='tech-section'>
                    <div className='picture-about'>
                        <img src={profilePic}/>
                    </div>
                    <div className='technologies-about'>
                        <div>Python</div>
                        <div>C++</div>
                        <div>Java</div>
                        <div>MySQL</div>
                        <div>Flask</div>
                        <div>AWS</div>
                        <div>React JS</div>
                        <div>React Native</div>
                        <div>Agile</div>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default About;