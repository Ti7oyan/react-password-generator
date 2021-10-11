import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  
    this.generatePassword = this.generatePassword.bind(this);
    this.putPassword = this.putPassword.bind(this);
  }

  generatePassword() {
    let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let length = Math.floor(Math.random() * (10 - 8 + 1)) + 8;
    let password = Array(length).fill(characters).map(function(letter) { return letter[Math.floor(Math.random() * letter.length)]}).join('');
    return password;
  }

  putPassword() {
    let element = document.getElementById('password');
    element.innerText = this.generatePassword();
  }

  render() {
    return (
      <div className="main-page">
        <Head>
          <meta charSet="utf-8"></meta>
          <title>Generate a random password!</title>
          <meta name="description" content="Random password generator made in Next.js"></meta>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link>
        </Head>
        <main className="bg-light d-flex flex-column m-2 text-center border p-5 shadow-sm">
            <p className="fw-light">Here is your password!</p>
            <p className="fs-1 p-3 bg-success text-white rounded fw-bold" id="password">{this.generatePassword()}</p>
            <div id="generate-container" className="d-flex m-auto">
              <p id="generate-another" className='p-2 fs-5 border'>Generate another!</p>
              <button id="generate-button" onClick={this.putPassword} className="btn btn-primary"><FontAwesomeIcon icon={faUndo} /></button>
            </div>
            <p id='footer-text' className="text-muted">Made with Next.js by <a href="https://github.com/Ti7oyan" target="_blank">Ti7oyan</a></p>
        </main>
      </div>
    )
  }
}

export default Home;
