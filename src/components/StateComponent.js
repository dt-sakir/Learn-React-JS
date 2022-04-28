import React, { Component } from 'react'

export default class StateComponent extends Component {
    constructor(){
        super()
        this.state = {
            name: "Md Sakir",
            email: "sakir@gmail.com",
            age: [1,2,3,4,5],
            skills: {
                backend: "PHP-Laravel",
                frontend: "React",
            },
        }
    }

    changeName(newName){
      this.setState({name:newName})
    }
    
  render() {
    return (
        <div>
          StateComponent
            <h6> Name: {this.state.name} </h6>
            <h6> Email: {this.state.email} </h6>
            <h6> Age: {this.state.age} </h6>
            <h6> Skills: {this.state.skills.backend} </h6>
            <button className='btn btn-info text-white' onClick={this.changeName.bind(this, "Jhumu")}>Click to change name</button>
        </div>
    )
  }
}
