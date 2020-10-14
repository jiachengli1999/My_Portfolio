import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import LandingPage from './cs/landingPage.js'

class Home extends Component{
    render(){
        return(
            <div className='container'>
                <LandingPage />
                {/* <div className='landing-page'>
                </div> 

                <div className='nav'>
                </div>

                <div className='about'>
                </div>          

                <div className='projects'>
                </div>     

                <div className='work'>
                </div> 

                <div className='contacts'>
                </div>  */}
            </div>
        )
    }
}

export default Home;