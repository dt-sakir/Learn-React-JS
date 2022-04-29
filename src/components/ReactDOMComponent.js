import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class ReactDOMComponent extends Component {
    chnageTitle(){
        let element = <b>New title</b>
        let container = document.getElementById('title')
        let callback = () => {
          alert('Hello');
        }
        ReactDOM.render(element, container, callback);

    }

  render() {
    return (
      <div>
          ReactDOMComponent
          <button className='btn btn-success' onClick={this.chnageTitle}>Click to change</button>
          <h4 id='title'>Default title</h4>

      </div>
    )
  }
}
