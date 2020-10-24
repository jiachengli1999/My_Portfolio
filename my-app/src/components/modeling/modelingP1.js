import React, { Component } from 'react'
import LandingPage from './modelingLanding.js'
import Nav from './modelingNav.js'
import Content from './modelingContent.js'
import Contact from '../Contacts.js'

class modelingP1 extends Component{
    render(){
        return(
            <main className='container-flex-modelingP1'>
                {/* <LandingPage /> */}
                <Nav />
                <Content />
                <Contact/>
            </main>
        )
    }
}

export default modelingP1;