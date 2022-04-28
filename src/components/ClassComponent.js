import React, { Component } from 'react'

export default class ClassComponent extends Component {
  render() {
    return (
      <div>
          ClassComponent
          <b>{this.props.text}</b>
      </div>
    )
  }
}
