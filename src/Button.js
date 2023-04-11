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
    let audioFile = document.getElementById(this.props.filePath);
    audioFile.volume = this.props.volume / 100;
    audioFile.pause();
    audioFile.currentTime = 0;
    audioFile.play();
  }

  handleClick(event){
    if(event.key === this.props.keyToCheck){
      this.playSound();
    }
  }

  render() {
    return(
      <div className="drum-pad">
        <button onClick={this.playSound}>
          {this.props.keyToCheck.toUpperCase()}
          <audio id={this.props.filePath}>
            <source src={this.props.filePath}/>
          </audio>
        </button>
        
      </div>
    )
  }
}

export default Button;