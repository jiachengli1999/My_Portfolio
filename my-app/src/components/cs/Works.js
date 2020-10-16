import React, {Component} from 'react'
import '../../styles/Works.css'
import workdata from './workdata.js'

class Works extends Component{
    render(){
        return(
            <div className='container-flex-works'>
                <div className='title-works'>
                    <h1>Work Experience</h1>
                </div>
                <div className='timeline-container'>
                    {workdata.map((data, index) =>(
                        <div className='timeline-item' key={index}>
                            <div className='timeline-item-context'>
                                <div>{data.job}</div>
                                <div>{data.company}</div>
                                <div>{data.from} - {data.to}</div>
                                <div>{data.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Works