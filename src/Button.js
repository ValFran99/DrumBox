import React from "react";

class Button extends React.Component{
  constructor(props){
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.playSound = this.playSound.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyDown)
  }

  shouldComponentUpdate(nextProps){
    if(
      this.props.filePath === nextProps.filePath &&
      this.props.keyToCheck === nextProps.keyToCheck &&
      this.props.volume === nextProps.volume &&
      this.props.fileName === nextProps.fileName &&
      this.props.displayButtonPressed === nextProps.displayButtonPressed
    ){
      return false;
    }
    return true;
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
      this.playSound();
    }
  }

  handleClick(){
    this.playSound()
  }

  render() {
    var innerText = this.props.keyToCheck.toUpperCase();
    return(
      <div className="drum-pad" id={this.props.fileName} onClick={this.handleClick}>
        {innerText}
        <audio id={innerText} className="clip" src={this.props.filePath}></audio> 
      </div>
    )
  }
}

export default Button;