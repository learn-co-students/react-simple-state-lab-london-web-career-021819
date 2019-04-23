import React, { Component } from 'react';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.value
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor () {
    this.setState({
      color: '#333'
    })
  }

  render () {
    const { color } = this.state
    return (
      <div onClick={this.changeColor} className="cell" style={{backgroundColor: color }}>
      </div>
    )
  }
}

export default Cell