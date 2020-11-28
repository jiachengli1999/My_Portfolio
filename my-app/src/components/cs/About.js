import React, { Component } from 'react'
import '../../styles/About.css'
import profilePic from '../../images/profile_pic.jpg'
import web_dev_icon from '../../images/web_dev.svg'
import mobile_dev_icon from '../../images/mobile_dev.svg'
import data_mining_icon from '../../images/data_mining.svg'
import data_visualization_icon from '../../images/data_visualization.svg'
import python_icon from '../../images/python.svg' //Freepik
import cplusplus_icon from '../../images/c.svg' //deemakdaksina
import java_icon from '../../images/java.svg' //Webalys
import mysql_icon from '../../images/mysql.svg' //Freepik
import flask_icon from '../../images/flask.PNG'
import aws_icon from '../../images/aws.PNG'
import react_icon from '../../images/react.svg' //Freepik
import react_native_icon from '../../images/react_native.PNG' 
import agile_icon from '../../images/agile.PNG' 
import html_icon from '../../images/html-5.svg' //Freepik
import css_icon from '../../images/css.svg' //Freepik
import js_icon from '../../images/javascript.svg' //Grphix Dxinerz
import Fade from 'react-reveal/Fade';

class About extends Component{
    render(){
        return(
            <section className='container-flex-about' id='about-page'>
                <div className='title-about'>
                    <Fade top>
                        <h1>About Me</h1>
                    </Fade>   
                </div>
                <div className='skills-about'>
                    <Fade top>
                    <div className='webdev-about skill'>
                        {/* Icon made by Pixel perfect from flaticon.com  */}
                        <img src={web_dev_icon}/>
                        <h2>Web Development</h2>
                        <p>
                            Full Stack Development, Responsive Design, Web Hosting 
                        </p>
                    </div>
                    <div className='mobiledev-about skill'>
                        {/* Icon made by prettycons from flaticon.com  */}
                        <img src={mobile_dev_icon}/>
                        <h2>Mobile Development</h2>
                        <p>
                            Full Stack Development, Responsive Design, Web Hosting. 
                            Experience with React Native and AWS
                        </p>
                    </div>
                    <div className='webscraping-about skill'>
                        {/* Icon made by Flat icons from flaticon.com  */}
                        <img src={data_mining_icon}/>
                        <h2>Data Mining/Cleaning</h2>
                        <p>
                            Web scrape data from the web and organize them using
                            Python libraries
                        </p>
                    </div>
                    <div className='datacleaning-about skill'>
                        {/* Icon made by Flat icons from flaticon.com  */}
                        <img src={data_visualization_icon}/>
                        <h2>Data Visualization</h2>
                        <p>
                            Experience visualizing data using Python libraries 
                            and React JS
                        </p>
                    </div>
                    </Fade>
                </div>
                <Fade bottom>
                <div className='tech-section'>
                    <div className='picture-about'>
                        <img src={profilePic}/>
                        <h2>New York University</h2>
                        <h3>Sept 2017 - Dec 2020</h3>
                        <h3>Computer Science BS, Minor in Math</h3>
                    </div>
                    <div className='technologies-about'>
                        <img src={python_icon}/>
                        <img src={cplusplus_icon}/>
                        <img src={java_icon}/>
                        <img src={mysql_icon}/>
                        <img src={react_icon}/>
                        <img src={html_icon}/>
                        <img src={css_icon}/>
                        <img src={js_icon}/>
                        <img src={flask_icon} className='img-icons' style={{border:'1px solid black'}}/>
                        <img src={aws_icon} className='img-icons'/>
                        <img src={react_native_icon} className='img-icons'/>
                        <img src={agile_icon} className='img-icons'/>
                    </div>
                </div>
                </Fade>
            </section>
        )
    }
}

export default About;