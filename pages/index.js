// Index.js

// React
import React from 'react';

// Next
import Head from 'next/head';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons';

// Material UI
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      useCapitals: true,
      useNumbers: true,
      passwordLength: 8
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleLengthChange = this.handleLengthChange.bind(this);
    this.addCapitals = this.addCapitals.bind(this);
    this.addNumbers = this.addNumbers.bind(this)
    this.changeLength = this.changeLength.bind(this);
    this.generatePassword = this.generatePassword.bind(this);
    this.putPassword = this.putPassword.bind(this);
    this.valueText = this.valueText.bind(this);
  }

  handleChange() {
    this.addCapitals()
    this.addNumbers()
  }

  handleLengthChange(event) {
    this.changeLength(event.target.value)
  }

  addCapitals() {
    const useCapitalsCheckbox = document.getElementById('use-capitals');
    if (!useCapitalsCheckbox.checked) {
      this.setState((state) => {
        return {useCapitals: false};
      });
    } else {
      this.setState((state) => {
        return {useCapitals: true};
      });
    }
  };
  
  addNumbers() {
    const useNumbersCheckbox = document.getElementById('use-numbers');
    if (!useNumbersCheckbox.checked) {
      this.setState((state) => {
        return {useNumbers: false};
      });
    } else {
      this.setState((state) => {
        return {useNumbers: true};
      });
    }
  }

  changeLength(length) {
    if (!(typeof length == 'boolean')) {
      this.setState((state) => {
        return {passwordLength: length};
      });
    } else {
      console.log('a')
    }
  }

  generatePassword() {
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    if (this.state.useCapitals) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (this.state.useNumbers) {
      characters += '0123456789';
    }
    let length = this.state.passwordLength;
    let password = Array(length).fill(characters).map(function(letter) { return letter[Math.floor(Math.random() * letter.length)]}).join('');
    return password;
  }

  putPassword() {
    const element = document.getElementById('password');
    element.innerText = this.generatePassword();
  }

  valueText(value) {
    return `${value}`;
  }

  render() {
    return (
      <div className="main-page">
        <Head>
          <meta charSet="utf-8"></meta>
          <title>Generate a random password!</title>
          <meta name="description" content="Random password generator made in Next.js"></meta>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link>
        </Head>
        <main className="bg-light d-flex flex-column m-2 text-center border p-5 shadow-sm">
            <p className="fw-light">Here is your password!</p>
            <p className="fs-1 p-3 bg-success text-white rounded fw-bold" id="password">{this.generatePassword()}</p>
            <div className="mb-3">
              <div>
                <input type="checkbox" id="use-numbers" name="use-numbers" value={this.state.useNumbers} onChange={this.handleChange} defaultChecked />
                <label className="m-2" htmlFor="use-numbers">Use numbers?</label>
              </div>
              <div>
                <input type="checkbox" id="use-capitals" name="use-capitals" value={this.state.useCapitals} onChange={this.handleChange} defaultChecked />
                <label className="m-2" htmlFor="use-capitals">Use capitals?</label>
              </div>
              <Box sx={{ minWidth: 20 }}>
                <FormControl fullWidth margin="dense" variant='filled'>
                  <InputLabel id="password-length-select-label">Length</InputLabel>
                  <Select 
                    labelId="password-length-select-label"
                    id="password-length"
                    value={this.state.passwordLength}
                    label="Length"
                    onChange={this.handleLengthChange}
                  >
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
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
