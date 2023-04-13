import './App.css';
import ControlPanel from './ControlPanel';
import Button from "./Button";
import React from 'react';
import Display from './Display';

const SOUNDBANKS = [
  [
    {
      filePath: "./sounds/soundFont1/HEATER_1.mp3",
      fileName: "Heater 1"
    },
    {
      filePath: "./sounds/soundFont1/HEATER_2.mp3",
      fileName: "Heater 2"
    },
    {
      filePath: "./sounds/soundFont1/HEATER_3.mp3",
      fileName: "Heater 3"
    },
    {
      filePath: "./sounds/soundFont1/HEATER_4.mp3",
      fileName: "Heater 4"
    },
    {
      filePath: "./sounds/soundFont1/CLAP.mp3",
      fileName: "Clap"
    },
    {
      filePath: "./sounds/soundFont1/OPEN_HH.mp3",
      fileName: "Open HH"
    },
    {
      filePath: "./sounds/soundFont1/KICK_N_HAT.mp3",
      fileName: "Kick n' Hat"
    },
    {
      filePath: "./sounds/soundFont1/KICK_1.mp3",
      fileName: "Kick"
    },
    {
      filePath: "./sounds/soundFont1/OPEN_HH.mp3",
      fileName: "Open HH"
    }
  ],
  [

  ]
]

const BANK = SOUNDBANKS[0]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 25,
      displayThis: 25
    };
    this.handleVolume = this.handleVolume.bind(this);
    this.displayButtonPressed = this.displayButtonPressed.bind(this)
  }
  handleVolume(volumeToChange){
    this.setState({
      volume: volumeToChange,
      displayThis: volumeToChange
    })
  };
  displayButtonPressed(buttonPressed){
    this.setState({
      displayThis: buttonPressed
    })
  }
  render() {
    return (
      <div className="App" id='drum-machine'>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Button 
                filePath={BANK[0].filePath}
                keyToCheck="q" 
                volume={this.state.volume}
                fileName={BANK[0].fileName}
                displayButtonPressed={this.displayButtonPressed}/>
            </div>
            <div className="col-md-4">
              <Button 
                filePath={BANK[1].filePath}
                keyToCheck="w" 
                volume={this.state.volume}
                fileName={BANK[1].fileName}
                displayButtonPressed={this.displayButtonPressed}/>
            </div>
            <div className="col-md-4">
              <Button 
                filePath={BANK[2].filePath} 
                keyToCheck="e" 
                volume={this.state.volume}
                fileName={BANK[2].fileName}
                displayButtonPressed={this.displayButtonPressed}/>
            </div>
          </div>
          <div className='row'>
            <div className="col-md-4">
              <Button 
                  filePath={BANK[3].filePath}
                  keyToCheck="a" 
                  volume={this.state.volume}
                  fileName={BANK[3].fileName}
                  displayButtonPressed={this.displayButtonPressed}/>
            </div>
            <div className="col-md-4">
              <Button 
                  filePath={BANK[4].filePath} 
                  keyToCheck="s" 
                  volume={this.state.volume}
                  fileName={BANK[4].fileName}
                  displayButtonPressed={this.displayButtonPressed}/>
            </div>
            <div className="col-md-4">
              <Button 
                  filePath={BANK[5].filePath} 
                  keyToCheck="d" 
                  volume={this.state.volume}
                  fileName={BANK[5].fileName}
                  displayButtonPressed={this.displayButtonPressed}/>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <Button 
                  filePath={BANK[6].filePath} 
                  keyToCheck="z" 
                  volume={this.state.volume}
                  fileName={BANK[6].fileName}
                  displayButtonPressed={this.displayButtonPressed}/>
            </div>
            <div className='col-md-4'>
              <Button 
                  filePath={BANK[7].filePath}
                  keyToCheck="x" 
                  volume={this.state.volume}
                  fileName={BANK[7].fileName}
                  displayButtonPressed={this.displayButtonPressed}/>
            </div>
            <div className='col-md-4'>
              <Button 
                  filePath={BANK[8].filePath}
                  keyToCheck="c" 
                  volume={this.state.volume}
                  fileName={BANK[8].fileName}
                  displayButtonPressed={this.displayButtonPressed}/>
            </div>
          </div>
        </div>
        <ControlPanel 
        handleVolume = {this.handleVolume}
        volume = {this.state.volume}
        displayButtonPressed={this.displayButtonPressed}/>
        <Display 
        displayThis={this.state.displayThis} />
      </div>
    );
  }
}

export default App;