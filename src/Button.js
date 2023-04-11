import React from "react";

class Button extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleClick);
  }

  playSound(){
    this.props.displayButtonPressed(this.props.fileName)
    let audioFile = document.getElementById(this.props.keyToCheck.toUpperCase());
    audioFile.volume = this.props.volume / 100;
    audioFile.pause();
    audioFile.currentTime = 0;
    audioFile.play();
  }

  handleClick(event){
    if(event.key === this.props.keyToCheck || event.key === this.props.keyToCheck.toUpperCase()){
      this.playSound();
    }
  }
  render() {
    var innerText = this.props.keyToCheck.toUpperCase();
    return(
      <div className="drum-pad" id={this.props.fileName}>
        <button onClick={this.playSound}>
          {innerText}
          <audio id={innerText} className="clip" src={this.props.filePath}></audio>
        </button>
        
      </div>
    )
  }
}

export default Button;