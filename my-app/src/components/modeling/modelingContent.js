import React, { Component } from 'react'
import persp1 from '../../images/Room_persp1.PNG'
import persp2 from '../../images/Room_persp2.PNG'
import persp3 from '../../images/Room_persp3.jpg'
import totoro from '../../images/totoro.PNG'
import '../../styles/modeling/content.css'
import Particles from 'react-particles-js'
import Fade from 'react-reveal/Fade';

class modelingContent extends Component{
    render(){
        return(
            <section className='container-flex'>
                <div id='room-page'>
                    <Fade top>
                    <div className='title-container'>
                        <Particles 
                            params={{ particles: { number: { value: 20,}, lineLinked: { enable: true, }, },}} 
                            className='particles-modeling' 
                        />
                        <div className='title-flex'>
                            <h1>The Room</h1>
                            <p>Modeled a detective room. The desk to the 
                                left represents an older detective workspace, 
                                while the one on the right represents a 
                                workspace that is more modern.
                            </p>
                        </div>
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

                <Fade>
                <div className='title-container' id='character-page'>
                    <Particles 
                        params={{ particles: { number: { value: 20,}, lineLinked: { enable: true, }, },}} 
                        className='particles-modeling' 
                    />
                    <div className='title-flex'>
                        <h1>Totoro</h1>
                        <p>Modeled Totoro from Hayao Miyazaki's film, "My Neighbor Totoro."</p>
                    </div>
                </div>
                </Fade>
                <Fade right>
                <div className='content-flex' style={{paddingBottom: '50px'}}>
                    <img src={totoro} className='big'/>
                </div>
                </Fade> 
            </section>
        )
    }
}

export default modelingContent;