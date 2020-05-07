import React, {Component} from 'react'

class ButtonObj extends Component {

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  }

  render() {

    let classNameWidth = "calcButton ";
    classNameWidth += this.props.wide ? "wide" : "";

    let classNameColour = "btn " ;
    classNameColour += this.props.orange ? "orange" : "";
    classNameColour += this.props.blue ? "blue" : "";
    
    return (
    
      <div className={classNameWidth}>
        <button className={classNameColour} onClick={this.handleClick}>{this.props.name}</button>
      </div>
    )
  }
}

export default ButtonObj

