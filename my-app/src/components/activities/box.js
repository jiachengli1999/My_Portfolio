import React from 'react'
import '../../styles/activities/box.css'

const Box = (props) =>{
    return(
        <div className='box-container'>
            <div className='back'>
                <div className='back-content'>
                    <h2>
                        {props.data.name}
                    </h2>
                    <h3>
                        {props.data.description}
                    </h3>
                </div>
            </div>
            <img src={props.data.imgurl} className='front'/>
        </div>
    )
}

export default Box;