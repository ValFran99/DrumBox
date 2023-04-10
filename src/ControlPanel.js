import React from 'react';
import Display from './Display';

class ControlPanel extends React.Component{
  constructor(props){
    super(props);
    this.getSliderValue = this.getSliderValue.bind(this);
    this.state = {
      value: 50
    };
  }
  getSliderValue(event){
    this.setState({
      value: event.target.value
    })
  }
  render() {
    return(
      <div className="control-panel" id='control-panel'>
        <Display 
        displayThis={this.state.value} />
        <input type="range" name="volume" id='volume' min={0} max={100} value={this.state.value} onChange={this.getSliderValue}/>
        <label htmlFor="volume">Volume</label>
      </div>
    )
  }
}

export default ControlPanel;