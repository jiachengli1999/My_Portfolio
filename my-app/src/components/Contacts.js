import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Contacts.css'
import github_logo from '../images/github_logo.svg'
import linkedin_logo from '../images/linkedin_logo.svg'


class Contacts extends Component{
    render(){
        return(
            <section className='container-flex-contacts' id='contacts-page'>
                <div className='title-contacts'>
                    <h1>Contacts</h1>
                </div>
                <div className='email-section'>jiachengli1999@gmail.com</div>
                <div className='contactBoxes-container'>
                    <div>
                        <a href='https://github.com/jiachengli1999?tab=repositories'>
                            <img src={github_logo}/>
                        </a>
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/in/jia-cheng-li'>
                            <img src={linkedin_logo}/>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contacts;