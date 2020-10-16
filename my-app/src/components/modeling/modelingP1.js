import React, { Component } from 'react'
import LandingPage from './modelingLanding.js'
import Nav from './modelingNav.js'
import Content from './modelingContent.js'

class modelingP1 extends Component{
    render(){
        return(
            <div className='container-flex-modelingP1'>
                <LandingPage />
                <Nav />
                <Content />
            </div>
        )
    }
}

export default modelingP1;