import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import LandingPage from './cs/landingPage.js'
import Nav from './cs/Nav.js'
import About from './cs/About.js'
import Projects from './cs/Projects.js'
import Contacts from './Contacts.js'
import Works from './cs/Works.js'
import * as Scroll from 'react-scroll';


class Home extends Component{
    render(){
        return(
            <div className='container'>
                <LandingPage />
                <Nav/> 
                <About/>
                <Projects/>
                <Works/>
                <Contacts/>
            </div>
        )
    }
}

export default Home;