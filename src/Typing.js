import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.scss';

class Typing extends Component {
    render() {
        return (
            <div className="App">
                <div className="Header">
                    <div className="menu-item">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/about">About</Link>
                    </div>
                </div>
                <div className="body-typing">
                    <h1 className="body-header">Speed Typer</h1>
                    <a href="https://www.producthunt.com/posts/touch-typer">Product Hunt</a>
                    <a href="https://chrome.google.com/webstore/detail/speed-typing-10-fast-fing/eoefmbbcheodkhndmjkfjicobhiafano">Download</a>
                </div>
            </div>
      )
  }
}

export default Typing
