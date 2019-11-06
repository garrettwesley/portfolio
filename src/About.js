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
                    <p>Incoming Software Engineer Intern at Google (Summer 2020).</p>
                    <p>I’ve done SWE internships at:</p>
                    <ul className="internship-list">
                        <li>BAE Systems (Summer 2019)</li>
                        <li>LiftIgniter (Summer 2018)</li>
                        <li>LuxScience (Spring 2018)</li>
                    </ul>
                </div>
            </div>
      )
  }
}

export default About
