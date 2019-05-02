import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="name">
              Garrett Wesley
          </p>
          <p>
              Studying Computer Science at UC Berkeley
          </p>
          <div className="link-container">
              <a
                className="App-link"
                href="https://github.com/garrettwesley"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>•
              <a
                className="App-link"
                href="https://linkedin.com/in/garrett-wesley"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>•
              <a
                className="App-link"
                href="https://garrettwesley.github.io/portfolio/Garrett_Wesley_Resume_19.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
          </div>
          <p><a href="mailto: garrettwesley@berkeley.edu">Contact Me</a></p>
        </header>
      </div>
    );
  }
}

export default App;
