import React, { Component } from 'react'

export default class FormComponent extends Component {
    constructor(){
        super();
        this.state={
            name:null
        }
    }
    onCHangeHandeler = (event) =>{
        this.setState({
            name: event.target.value
        })
    }
  render() {
    return (
      <div className='container m-5 border border-danger'>
          <form>
              <p>{this.state.name}</p>
              <input type="text" className='form-control' placeholder='Your name' onChange={this.onCHangeHandeler} />
              <button className='btn btn-success text-white' type='submit'>SUBMIT</button>
          </form>
      </div>
    )
  }
}
