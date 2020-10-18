import React, { Component } from 'react'
import '../../styles/landingPage.css'
import TextLoop from "react-text-loop";
import { Link } from "react-scroll";
import * as Router from 'react-router-dom'
import Particles from 'react-particles-js'

class landingPage extends Component{
    render(){
        return(
            <div className='container-flex2 landing-page'>
                <Particles 
                    params={{ 
                        particles: { 
                            number: { 
                                value: 150,
                            },
                            lineLinked: {
                                enable: false,
                            },
                            size:{
                                random: true,
                            },
                            move:{
                                direction: 'top',
                                outMode: 'out',
                            }
                        },
                    }} 
                    className='particles' 
                /> 

                <div className='title'>
                    <h1>
                        Hi, I'm Jia Cheng Li. <br/>
                        <TextLoop>
                            <div>I'm a Software Engineer.</div>
                            <div>I'm a Data Scientist/Engineer.</div>
                            <div>I like to explore new tech.</div>
                        </TextLoop>
                    </h1>
                    <div className='btns'>
                        <Link to="about-page" activeClass='active' spy={true} smooth={true} offset={-30} duration={500}>
                            Software Profile
                        </Link>
                        <Router.Link to='/modeling'>
                            3D Modeling 
                        </Router.Link>
                        <Router.Link to='/activities'>
                            Activities
                        </Router.Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default landingPage;