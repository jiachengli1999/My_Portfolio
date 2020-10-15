import React, { Component } from 'react'
import '../../styles/Projects.css'
import ufinance from '../../images/ufinance.PNG'
import sorting from '../../images/sorting.PNG'
import tic from '../../images/tic.PNG'
import stock from '../../images/stock.PNG'
import finstagram from '../../images/finstagram.PNG'
import todo from '../../images/todo.PNG'
import weather from '../../images/weather.PNG'
import compass from '../../images/compass_clock.PNG'
import web_dev from '../../images/web_dev.PNG'

class Projects extends Component{
    render(){
        return(
            <div className='container-flex-project'>
                <div className='title-project'>
                    <h1>Projects</h1>
                </div>
                <div className='project-container-flex'>
                    <div className='project-container'>
                        <img src={ufinance} className='imgwrap'/>
                        <h1 className='imgdescription'>uFinance</h1>
                        <a className='demobtn' href='https://github.com/ml5803/uFinance'>
                            View Demo
                        </a>
                    </div>
                    <div className='project-container'>
                        <img src={sorting} className='imgwrap'/>
                        <h1 className='imgdescription'>Sorting Visualizer</h1>
                        <a className='demobtn' href='https://jiachengli1999.github.io/Sorting_visualizer/'>
                            View Demo
                        </a>
                    </div>
                    <div className='project-container'>
                        <img src={tic} className='imgwrap'/>
                        <h1 className='imgdescription'>Expandable Tic-Tac-Toe</h1>
                        <a className='demobtn' href='https://jiachengli1999.github.io/Expandable-Tic-Tac-Toe/'>
                            View Demo
                        </a>
                    </div>
                    <div className='project-container'>
                        <img src={stock} className='imgwrap'/>
                        <h1 className='imgdescription'>Stock Price Prediction</h1>
                        <a className='demobtn' href='https://github.com/jiachengli1999/Predicting-Stock-Market-Prices'>
                            View Demo
                        </a>
                    </div>
                    <div className='project-container'>
                        <img src={finstagram} className='imgwrap'/>
                        <h1 className='imgdescription'>Finstagram</h1>
                        <a className='demobtn' href='https://github.com/jiachengli1999/Finstagram'>
                            View Demo
                        </a>
                    </div>
                    <div className='project-container'>
                        <img src={todo} className='imgwrap'/>
                        <h1 className='imgdescription'>To Do List</h1>
                        <a className='demobtn' href='https://github.com/jiachengli1999/To-Do-List-Website'>
                            View Demo
                        </a>
                    </div>
                    <div className='project-container'>
                        <img src={weather} className='imgwrap'/>
                        <h1 className='imgdescription'>Weather App</h1>
                        <a className='demobtn' href='https://jiachengli1999.github.io/Weather-App/'>
                            View Demo
                        </a>
                    </div>
                    <div className='project-container'>
                        <img src={compass} className='imgwrap'/>
                        <h1 className='imgdescription'>Compass Clock</h1>
                        <a className='demobtn' href='https://jiachengli1999.github.io/Compass-Clock-using-React/'>
                            View Demo
                        </a>
                    </div>
                    <div className='project-container'>
                        <img src={web_dev} className='imgwrap'/>
                        <h1 className='imgdescription'>Intro to web dev work</h1>
                        <a className='demobtn' href='https://jiachengli1999.github.io/IDM-Fall-2020-Web-dev/#/'>
                            View Demo
                        </a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Projects;