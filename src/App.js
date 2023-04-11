import './App.css';
import ControlPanel from './ControlPanel';
import "./Display.js";
import Button from "./Button";
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {volume: 50};
    this.handler = this.handler.bind(this);
  }
  handler(volumeToChange){
    this.setState({
      volume: volumeToChange
    })
  }
  render() {
    return (
      <div className="App" id='drum-machine'>
        <Button 
        filePath="./HEATER_1.mp3" 
        keyToCheck="q" 
        volume={this.state.volume}/>
        <Button 
        filePath="./HEATER_2.mp3" 
        keyToCheck="w" 
        volume={this.state.volume}/>
        <Button 
        filePath="./HEATER_3.mp3" 
        keyToCheck="e" 
        volume={this.state.volume}/>
        <Button 
        filePath="./HEATER_4.mp3" 
        keyToCheck="a" 
        volume={this.state.volume}/>
        <Button 
        filePath="./CLAP.mp3" 
        keyToCheck="s" 
        volume={this.state.volume}/>
        <Button 
        filePath="./OPEN_HH.mp3" 
        keyToCheck="d" 
        volume={this.state.volume}/>
        <Button 
        filePath="./KICK_N_HAT.mp3" 
        keyToCheck="z" 
        volume={this.state.volume}/>
        <Button 
        filePath="./KICK_1.mp3" 
        keyToCheck="x" 
        volume={this.state.volume}/>
        <Button 
        filePath="./CLOSED_HH.mp3" 
        keyToCheck="c" 
        volume={this.state.volume}/>
        <ControlPanel 
        handleVolume = {this.handler}
        volume = {this.state.volume}/>
      </div>
    );
  }
}

export default App;