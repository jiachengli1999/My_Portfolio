import React, { Component } from 'react'
import { useEffect } from 'react';
import '../../styles/activities/activities.css'
import Box from './box.js'
import data from './data'
import Nav from './activitiesNav.js'
import Contact from '../Contacts.js'

class activitiesP1 extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className='container-flex-activitiesP1'>
                <Nav />
                <div className='boxes'>  
                {
                    data.map((obj, index)=>(
                        <Box data={obj} 
                            key={index}
                        />
                    ))
                }
                </div>
                <Contact/>
            </div>
        )
    }
}

export default activitiesP1;