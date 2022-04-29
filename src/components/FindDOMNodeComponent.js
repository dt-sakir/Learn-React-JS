import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class FindDOMNodeComponent extends Component {
    changeImage(){
        let image = document.getElementById('product-image');
        ReactDOM.findDOMNode(image).src='https://ivazz.com/wp-content/uploads/2021/05/react.png'
    }

  render() {
    return (
      <div>
          FindDOMNodeComponent
          <button className='btn btn-danger' onClick={this.changeImage}>Click to chnage image</button> <br/>
          <img id='product-image' src="https://reactrouter.com/react-square.png" alt="" />

      </div>
    )
  }
}
