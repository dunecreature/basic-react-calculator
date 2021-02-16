import React from "react"
import Button from "./Button"
import Clear from "./Clear"
import Input from "./Input"
import "./Container.css"
import * as math from "mathjs"

class Container extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    input: ""
    }
      this.handleButton = this.handleButton.bind(this)
      this.handleClear = this.handleClear.bind(this)
      this.handleEval = this.handleEval.bind(this)
  }

  handleButton(val) {
    this.setState({ input: this.state.input + val})
  }

  handleClear() {
    this.setState({ input: ""})
  }

  handleEval() {
    this.setState({ input: math.evaluate(this.state.input)})
  }

  render(){
    return (
      <div className="container">
        <Input input={this.state.input}/>
        <div className="row">
          <Button onClick={this.handleButton}>7</Button>
          <Button onClick={this.handleButton}>8</Button>
          <Button onClick={this.handleButton}>9</Button>
          <Button onClick={this.handleButton}>+</Button>
        </div>
        <div className="row">
          <Button onClick={this.handleButton}>4</Button>
          <Button onClick={this.handleButton}>5</Button>
          <Button onClick={this.handleButton}>6</Button>
          <Button onClick={this.handleButton}>-</Button>
        </div>
        <div className="row">
          <Button onClick={this.handleButton}>1</Button>
          <Button onClick={this.handleButton}>2</Button>
          <Button onClick={this.handleButton}>3</Button>
          <Button onClick={this.handleButton}>*</Button>
        </div>
        <div className="row">
          <Button onClick={this.handleButton}>.</Button>
          <Button onClick={this.handleButton}>0</Button>
          <Button onClick={this.handleButton}>/</Button>
          <Button onClick={this.handleEval}>=</Button>
        </div>
        <Clear onClick={this.handleClear}/>
      </div>
    )
  }
}

export default Container