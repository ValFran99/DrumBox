import React from "react";

class Button extends React.Component{
  constructor(props){
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.playSound = this.playSound.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setActive = this.setActive.bind(this);
    this.state = {
      active: false
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyDown)
  }

  setActive(bool){
    this.setState({
      active: bool
    })
  }

  playSound(){
    this.props.displayButtonPressed(this.props.fileName)
    let audioFile = document.getElementById(this.props.keyToCheck.toUpperCase());
    audioFile.volume = this.props.volume / 100;
    audioFile.pause();
    audioFile.currentTime = 0;
    audioFile.play();
  }

  handleKeyDown(event){
    if(event.key === this.props.keyToCheck || event.key === this.props.keyToCheck.toUpperCase()){
      this.playSound()
      this.setActive(true)
      setTimeout( () => this.setActive(false), 100)
    }
  }

  handleClick(){
    this.playSound()
    this.setActive(true)
    setTimeout( () => this.setActive(false), 100)
  }

  render() {
    var innerText = this.props.keyToCheck.toUpperCase();
    return(
      <div 
        className="drum-pad" id={this.props.fileName} 
        onClick={this.handleClick} 
        style={{
          backgroundColor: this.state.active ? "yellow" : "grey",
          paddingTop: this.state.active ? 12 : 9}
        }>
        {innerText}
        <audio id={innerText} className="clip" src={this.props.filePath}></audio> 
      </div>
    )
  }
}

export default Button;