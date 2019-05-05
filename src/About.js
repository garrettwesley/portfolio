import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.scss';

class About extends Component {
    render() {
        return (
            <div className="App">
                <div className="Header">
                    <div className="menu-item">
                        <Link to="/">Home</Link>
                    </div>
                </div>
                <div className="body">
                    <h1 className="body-header">About me</h1>
                    <p>Computer Science at Berkeley (Class of 2021) </p>
                    <p>Software Engineer intern at BAE Systems starting in May 2019.</p>
                    <p>I’ve done SWE internships at LiftIgniter (2018) and LuxScience (2018).</p>
                </div>
            </div>
      )
  }
}

export default About
