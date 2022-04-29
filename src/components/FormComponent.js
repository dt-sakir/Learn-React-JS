import React, { Component } from 'react'

export default class FormComponent extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            email:null,
        }
    }
    onCHangeHandeler = (event) =>{
        // state name get by input field name and set as value of this field
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    onSubmitHandeler = () =>{
        alert(this.state.name);
        alert(this.state.email);
    }
  render() {
    return (
      <div className='container m-5 border border-danger'>
          <form onSubmit={this.onSubmitHandeler}>
              <p>{this.state.name}</p>
              <input type="text" name='name' className='form-control' placeholder='Your name' onChange={this.onCHangeHandeler} />
              <p>{this.state.email}</p>
              <input type="email" name='email' className='form-control' placeholder='Your email' onChange={this.onCHangeHandeler} />
              <button className='btn btn-success text-white' type='submit'>SUBMIT</button>
          </form>
      </div>
    )
  }
}
