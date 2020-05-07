import React, {Component} from 'react'
import ButtonObj from './ButtonObj'

class ButtonBoard extends Component {

  clickHandler = (e) => {
   // e.preventDefault();
   this.props.clickHandler(e);
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <ButtonObj name="AC"  clickHandler={this.clickHandler} wide   />
          <ButtonObj name="+/-" clickHandler={this.clickHandler}        />
          <ButtonObj name="+"   clickHandler={this.clickHandler} orange />
        </div>
        <div className="col s12">
          <ButtonObj name="7" clickHandler={this.clickHandler} />
          <ButtonObj name="8" clickHandler={this.clickHandler} />
          <ButtonObj name="9" clickHandler={this.clickHandler} />
          <ButtonObj name="x" clickHandler={this.clickHandler} orange/>
        </div>
        <div className="col s12">
          <ButtonObj name="4" clickHandler={this.clickHandler} />
          <ButtonObj name="5" clickHandler={this.clickHandler} />
          <ButtonObj name="6" clickHandler={this.clickHandler} />
          <ButtonObj name="-" clickHandler={this.clickHandler} orange />
        </div>
        <div className="col s12">
          <ButtonObj name="1" clickHandler={this.clickHandler} />
          <ButtonObj name="2" clickHandler={this.clickHandler} />
          <ButtonObj name="3" clickHandler={this.clickHandler} />
          <ButtonObj name="/" clickHandler={this.clickHandler} orange />
        </div>
        <div className="col s12">
          <ButtonObj name="0" clickHandler={this.clickHandler} />
          <ButtonObj name="." clickHandler={this.clickHandler} />
          <ButtonObj name="=" clickHandler={this.clickHandler} wide blue/>
        </div>
      </div>
    )
  }
}

export default ButtonBoard
