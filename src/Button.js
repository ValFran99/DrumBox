import React from "react";

class Button extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      audioFilePath: props.filePath
    }
    this.handleClick = this.handleClick.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleClick);
  }

  playSound(){
    document.getElementById("myFile").pause();
    document.getElementById("myFile").currentTime = 0;
    document.getElementById("myFile").play();
  }

  handleClick(event){
    if(event.key === "q"){
      this.playSound();
    }
  }

  render() {
    return(
      <div className="button-wrapper">
        <button onClick={this.playSound}>Click!</button>
        <audio id="myFile">
          <source src={this.state.audioFilePath}/>
        </audio>
      </div>
    )
  }
}

export default Button;