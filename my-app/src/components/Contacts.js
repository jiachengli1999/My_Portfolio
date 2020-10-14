import React, { Component } from 'react'
import '../styles/Contacts.css'

class Contacts extends Component{
    render(){
        return(
            <div className='container-flex-contacts'>
                <div className='title-contacts'>
                    <h1>Contacts</h1>
                </div>
                <div className='contactBoxes-container'>
                    <div>Box1</div>
                    <div>Box2</div>
                    <div>Box3</div>
                </div>
            </div>
        )
    }
}

export default Contacts;