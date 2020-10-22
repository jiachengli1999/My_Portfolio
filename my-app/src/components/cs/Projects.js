import React, { Component } from 'react'
import '../../styles/Projects.css'
import Data from './Projectdata.js'
import Fade from 'react-reveal/Fade';

class Projects extends Component{
    render(){
        return(
            <div className='container-flex-project' id='projects-page'>
                <div className='title-project'>
                    <h1>Projects</h1>
                </div>
                <div className='project-container-flex'>
                    {
                        Data.map((obj, index)=>(
                            <Fade>
                            <div className='project-container' key={index}>
                                <img src={obj.imgurl} className='imgwrap'/>
                                <h1 className='imgdescription'>{obj.name}</h1>
                                <a className='demobtn' href={obj.link}>
                                    View Demo
                                </a>
                            </div>
                            </Fade>
                        ))
                    }
                </div>
                
            </div>
        )
    }
}

export default Projects;