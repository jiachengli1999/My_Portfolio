import React, { Component } from 'react'
import '../../styles/Nav.css'

class Nav extends Component{
    render(){
        return(
            <div className='container-flex-nav'>
                <div className='nav-item1'>
                    <label>About Me</label>
                    <label>Projects</label>
                    <label>Work Experience</label>
                    <label>Contact Me</label>
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