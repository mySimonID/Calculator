import React, { Component } from 'react'

import '../css/Display.css'
class Display extends Component {


  render() {
    return (
      <div className="row">
        <div className="col s12">
        <div className="display">
          <div>{this.props.value}</div>
        </div>
        </div>
      </div>
    )
  }
}

export default Display
