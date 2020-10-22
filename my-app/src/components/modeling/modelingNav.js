import React, { Component } from 'react'
import { Link } from "react-scroll";
import * as Router from 'react-router-dom';

class modelingNav extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className='container-flex-nav'>
                <div className='nav-item1 modeling-nav'>
                    <Link to="room-page" activeClass='active' spy={true} smooth={true} offset={-30} duration={500}>
                        The Room 
                    </Link>
                    <Link to="contacts-page" activeClass='active' spy={true} smooth={true} offset={-30} duration={500}>
                        Contacts 
                    </Link>
                </div>
                <div className='nav-item2'>
                    <Router.Link to='/'>
                        Home
                    </Router.Link>
                    <Router.Link to='/modeling'>
                        3D Modeling 
                    </Router.Link>
                    <Router.Link to='/activities'>
                        Activities
                    </Router.Link>
                    {/* <label>3D Modeling</label>
                    <label>Activities</label> */}
                </div>
            </div>
        )
    }
}

export default modelingNav;