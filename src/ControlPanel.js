import React from 'react';

class ControlPanel extends React.Component{
  constructor(props){
    super(props);
    this.getSliderValue = this.getSliderValue.bind(this);
  }
  getSliderValue(event){
    this.props.handleVolume(event.target.value)
  }
  render() {
    return(
      <div className="control-panel" id='control-panel'>
        <input type="range" name="volume" id='volume' min={0} max={100} value={this.props.volume} onChange={this.getSliderValue}/>
        {/* <label htmlFor="volume">Volume</label> */}
      </div>
    )
  }
}

export default ControlPanel;