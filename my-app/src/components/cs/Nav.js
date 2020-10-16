import React, { Component } from 'react'
import '../../styles/Nav.css'
import { Link } from "react-scroll";

class Nav extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className='container-flex-nav'>
                <div className='nav-item1'>
                    <Link to="about-page" activeClass='active' spy={true} smooth={true} offset={-30} duration={500}>
                        About Me
                    </Link>
                    <Link to="projects-page" activeClass='active' spy={true} smooth={true} offset={20} duration={500}>
                        Projects
                    </Link>
                    <Link to="works-page" activeClass='active' spy={true} smooth={true} offset={20} duration={500}>
                        Work Experience
                    </Link>
                    <Link to="contacts-page" activeClass='active' spy={true} smooth={true} offset={50} duration={500}>
                        Contacts
                    </Link>
                </div>
                <div className='nav-item2'>
                    <label>3D Modeling</label>
                    <label>Activities</label>
                </div>
            </div>
        )
    }
}

export default Nav;