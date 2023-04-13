import React from "react";

class Display extends React.Component{
  constructor(props){
    super(props);
  }

  shouldComponentUpdate(nextProps){
    if(nextProps.displayThis === this.props.displayThis){
      return false
    }
    return true
  }

  render(){
    return(
      <div id="display">
        {this.props.displayThis}
      </div>
    )
  }
}

export default Display;
