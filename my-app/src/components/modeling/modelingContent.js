import React, { Component } from 'react'
import persp1 from '../../images/Room_persp1.PNG'
import persp2 from '../../images/Room_persp2.PNG'
import persp3 from '../../images/Room_persp3.jpg'
import '../../styles/modeling/content.css'
import Particles from 'react-particles-js'
import Fade from 'react-reveal/Fade';

class modelingContent extends Component{
    render(){
        return(
            <div className='container-flex' id='room-page'>
                <Particles 
                    params={{ 
                        particles: { 
                            number: { 
                                value: 60,
                            },
                            lineLinked: {
                                enable: true,
                            },
                        },
                    }} 
                    className='particles-modeling' 
                /> 
                <Fade top>
                <div className='title-flex'>
                    <h1>The Room</h1>
                    <p>Modeled a detective room. The desk to the <br></br>
                        left represents an older detective workspace, <br></br>
                        whilte the one on the right represents a <br></br>
                        workspace that is more modern.<br></br>
                    </p>
                </div>
                </Fade>
                <Fade right>
                <div className='content-flex'>
                    <img src={persp1}/>
                    <h2>Perspective 1</h2>
                </div>
                </Fade>
                <Fade left>
                <div className='content-flex'>
                    <h2>Perspective 2</h2>
                    <img src={persp2}/>
                </div>
                </Fade>
                <Fade right>
                <div className='content-flex' style={{paddingBottom: '50px'}}>
                    <img src={persp3}/>
                    <h2>Perspective 3</h2>
                </div>
                </Fade>
            </div>
        )
    }
}

export default modelingContent;