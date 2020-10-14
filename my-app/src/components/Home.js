import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import LandingPage from './cs/landingPage.js'
import Nav from './cs/Nav.js'
import About from './cs/About.js'
import Projects from './cs/Projects.js'
import Contacts from './Contacts.js'

class Home extends Component{
    render(){
        return(
            <div className='container'>
                <LandingPage />
                <Nav/> 
                <About/>
                <Projects />
                <Contacts />
                {/* <div className='landing-page'>
                </div> 

                <div className='nav'>
                </div>

                <div className='about'>
                </div>          

                <div className='projects'>
                </div>     

                <div className='work'>
                </div> 

                <div className='contacts'>
                </div>  */}
            </div>
        )
    }
}

export default Home;