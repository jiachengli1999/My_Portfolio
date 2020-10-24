import React, {Component} from 'react'
import '../../styles/Works.css'
import workdata from './workdata.js'
import Fade from 'react-reveal/Fade';

class Works extends Component{
    render(){
        return(
            <section className='container-flex-works' id='works-page'>
                <section className='title-works'>
                    <h1>Work Experience</h1>
                </section>
                <section className='timeline-container'>
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
                </section>
            </section>
        )
    }
}

export default Works