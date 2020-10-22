import React, {Component} from 'react'
import '../../styles/Works.css'
import workdata from './workdata.js'
import Fade from 'react-reveal/Fade';

class Works extends Component{
    render(){
        return(
            <div className='container-flex-works' id='works-page'>
                <div className='title-works'>
                    <h1>Work Experience</h1>
                </div>
                <div className='timeline-container'>
                    {workdata.map((data, index) =>(
                        <div className='timeline-item' key={index}>
                            <Fade>
                            <div className='timeline-item-context' id={data.id}>
                                <h3>{data.job}</h3>
                                <div>{data.company}</div>
                                <div>{data.from} - {data.to}</div>
                                {/* <div>{data.description}</div> */}
                            </div>
                            </Fade>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Works