import React, { Component } from 'react'
import '../../styles/activities/activities.css'
import Box from './box.js'
import data from './data'
class activitiesP1 extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className='container-flex-activitiesP1'>
                {
                    data.map((obj, index)=>(
                        <Box data={obj} 
                            key={index}
                        />
                    ))
                }
            </div>
        )
    }
}

export default activitiesP1;