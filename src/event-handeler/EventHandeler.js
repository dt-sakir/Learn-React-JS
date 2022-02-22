import React, { Component } from 'react'

export default class EventHandeler extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       changedValue : ''
    }
  }

  render() {
    return (
        <div>
          <button onClick={this.handelClick}>Click alert</button>
          <hr/>
          <input type="text" onChange={this.handelOnChange} />
          <p>{this.state.changedValue}</p>
        </div>
    )
  }

  handelClick = () =>{
    alert('Click')
  }

  handelOnChange = (e) =>{
    // console.log(e.target.value)
    this.setState({
      changedValue : e.target.value
    }, () =>{
      console.log(this.state.changedValue)
    });
  }
}
