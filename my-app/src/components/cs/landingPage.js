import React, { Component } from 'react'
import '../../styles/landingPage.css'
import TextLoop from "react-text-loop";

class landingPage extends Component{
    constructor(){
        super()
        this.state={
            index: 0,
            positions: ['Software Engineer', 'Data Engineer/Scientist', 'Explorer']
        }
    }

    // componentDidMount(){
    //     setInterval(() => this.updatePosition(), 5000)
    // }

    // updatePosition(){
    //     let newIndex = this.state.index + 1
    //     if (newIndex > 2){ newIndex = 0 }
    //     this.setState({index: newIndex})
    // }

    render(){
        let position = this.state.positions[this.state.index]
        return(
            <div className='container-flex landing-page'>
                <div className='title'>
                    <h1>
                        Hi, I'm Jia Cheng Li. <br/>
                        <TextLoop>
                            <div>I'm a Software Engineer.</div>
                            <div>I'm a Data Scientist/Engineer.</div>
                            <div>I like to explore new tech.</div>
                        </TextLoop>
                    </h1>
                    <div className='btns'>
                        <label>Software Profile</label>
                        <label>3D Modeling Profile</label>
                        <label>Activities</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default landingPage;