import React, { Component } from 'react'
import '../../styles/About.css'
import profilePic from '../../images/profile_pic.jpg'
import web_dev_icon from '../../images/web_dev.svg'
import mobile_dev_icon from '../../images/mobile_dev.svg'
import data_mining_icon from '../../images/data_mining.svg'
import data_visualization_icon from '../../images/data_visualization.svg'

class About extends Component{
    render(){
        return(
            <div className='container-flex-about'>
                <div className='title-about'>
                    <h1>About Me</h1>
                </div>
                <div className='skills-about'>
                    <div className='webdev-about'>
                        {/* Icon made by Pixel perfect from flaticon.com  */}
                        <img src={web_dev_icon}/>
                        <h2>Web Development</h2>
                        <p>
                            Full Stack Development, Responsive Design, Web Hosting 
                        </p>
                    </div>
                    <div className='mobiledev-about'>
                        {/* Icon made by prettycons from flaticon.com  */}
                        <img src={mobile_dev_icon}/>
                        <h2>Mobile Development</h2>
                        <p>
                            Full Stack Development, Responsive Design, Web Hosting. 
                            Experience with React Native and AWS
                        </p>
                    </div>
                    <div className='webscraping-about'>
                        {/* Icon made by Flat icons from flaticon.com  */}
                        <img src={data_mining_icon}/>
                        <h2>Data Mining/Cleaning</h2>
                        <p>
                            Web scrape data from the web and organizing them using
                            Python libraries
                        </p>
                    </div>
                    <div className='datacleaning-about'>
                        {/* Icon made by Flat icons from flaticon.com  */}
                        <img src={data_visualization_icon}/>
                        <h2>Data Visualization</h2>
                        <p>
                            Experience visualizing data using Python libraries 
                            and React JS
                        </p>
                    </div>
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