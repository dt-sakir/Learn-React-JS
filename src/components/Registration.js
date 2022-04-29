import React, { Component } from 'react'

export default class Registration extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            phone: null,
            password: null,
        }
    }
    onCHangeHandeler = (event) =>{
        this.setState({ [event.target.name]:event.target.value });

        if(event.target.name === 'name'){
            let namePattern = /[A-Za-z ]{1,32}/;
            if(!namePattern.test(event.target.value))
            this.setState({ [event.target.name]:'Name is not valid' });
        }
        if(event.target.name === 'email'){
            let namePattern = /[@]{1,32}/;
            if(!namePattern.test(event.target.value))
            this.setState({ [event.target.name]:'Name is not valid' });
        }
    }
    
    render() {
        return (
            <div className='container m-5 border border-danger'>
                <b>Registration</b>
                <form onSubmit={this.onSubmitHandeler}>
                    <p>Name: {this.state.name}</p>
                    <input type="text" name='name' className='form-control' placeholder='Your name' onChange={this.onCHangeHandeler} />
                    <p>Email: {this.state.email}</p>
                    <input type="email" name='email' className='form-control' placeholder='Your email' onChange={this.onCHangeHandeler} />
                    <p>Phone: {this.state.phone}</p>
                    <input type="text" name='phone' className='form-control' placeholder='Your phone' onChange={this.onCHangeHandeler} />
                    <p>Password: {this.state.password}</p>
                    <input type="password" name='password' className='form-control' placeholder='Your password' onChange={this.onCHangeHandeler} />
                    <button className='btn btn-success text-white' type='submit'>SUBMIT</button>
                </form>
            </div>
        )
    }
}
