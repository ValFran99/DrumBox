import './App.css';
import ControlPanel from './ControlPanel';
import Button from "./Button";
import React from 'react';
import Display from './Display';


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
                filePath="./HEATER_1.mp3" 
                keyToCheck="q" 
                volume={this.state.volume}
                fileName="Heater 1"
                displayButtonPressed={this.displayButtonPressed}/>
            </div>
            <div className="col-md-4">
              <Button 
                filePath="./HEATER_2.mp3" 
                keyToCheck="w" 
                volume={this.state.volume}
                fileName="Heater 2"
                displayButtonPressed={this.displayButtonPressed}/>
            </div>
            <div className="col-md-4">
              <Button 
                filePath="./HEATER_3.mp3" 
                keyToCheck="e" 
                volume={this.state.volume}
                fileName="Heater 3"
                displayButtonPressed={this.displayButtonPressed}/>
            </div>
          </div>
          <div className='row'>
            <div className="col-md-4">
              <Button 
                  filePath="./HEATER_4.mp3" 
                  keyToCheck="a" 
                  volume={this.state.volume}
                  fileName="Heater 4"
                  displayButtonPressed={this.displayButtonPressed}/>
            </div>
            <div className="col-md-4">
              <Button 
                  filePath="./CLAP.mp3" 
                  keyToCheck="s" 
                  volume={this.state.volume}
                  fileName="Clap"
                  displayButtonPressed={this.displayButtonPressed}/>
            </div>
            <div className="col-md-4">
              <Button 
                  filePath="./OPEN_HH.mp3" 
                  keyToCheck="d" 
                  volume={this.state.volume}
                  fileName="Open HH"
                  displayButtonPressed={this.displayButtonPressed}/>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <Button 
                  filePath="./KICK_N_HAT.mp3" 
                  keyToCheck="z" 
                  volume={this.state.volume}
                  fileName="Kick n' hat"
                  displayButtonPressed={this.displayButtonPressed}/>
            </div>
            <div className='col-md-4'>
              <Button 
                  filePath="./KICK_1.mp3" 
                  keyToCheck="x" 
                  volume={this.state.volume}
                  fileName="Kick"
                  displayButtonPressed={this.displayButtonPressed}/>
            </div>
            <div className='col-md-4'>
              <Button 
                  filePath="./CLOSED_HH.mp3" 
                  keyToCheck="c" 
                  volume={this.state.volume}
                  fileName="Closed HH"
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