import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="name">
              Garrett Wesley
          </p>
          <a
            className="App-link"
            href="https://github.com/garrettwesley"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="App-link"
            href="https://linkedin.com/in/garrett-wesley"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            className="App-link"
            href="Garrett_Wesley_Resume_19.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </header>
      </div>
    );
  }
}

export default App;
