import React, { Component } from 'react'
import persp1 from '../../images/Room_persp1.PNG'
import persp2 from '../../images/Room_persp2.PNG'
import persp3 from '../../images/Room_persp3.jpg'
import '../../styles/modeling/content.css'

class modelingContent extends Component{
    render(){
        return(
            <div className='container-flex'>
                <div className='title-flex'>
                    <h1>The Room</h1>
                </div>
                <div className='content-flex'>
                    <img src={persp1}/>
                    <h2>Perspective 1</h2>
                </div>
                <div className='content-flex'>
                    <h2>Perspective 2</h2>
                    <img src={persp2}/>
                </div>
                <div className='content-flex' style={{paddingBottom: '50px'}}>
                    <img src={persp3}/>
                    <h2>Perspective 3</h2>
                </div>
            </div>
        )
    }
}

export default modelingContent;