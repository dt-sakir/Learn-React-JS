import React, { Component } from 'react'

export default class Registration extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            phone: null,
            password: null,
            city: 'tangail'
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
        const myList = ['A', 'B', 'C', 'D', 'E'];
        const list = myList.map((data) => {
            return <li>{data}</li>
        });

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
                    <p>{this.state.city}</p>
                    <select className='form-control' name='city' value={this.state.city} onChange={this.onCHangeHandeler}>
                        <option value="dhaka" key="">Dhaka</option>
                        <option value="tangail" key="">Tangail</option>
                        <option value="khulna" key="">Khulna</option>
                    </select>
                    <ul>
                        {list}
                    </ul>
                    <button className='btn btn-success text-white' type='submit'>SUBMIT</button>
                </form>
            </div>
        )
    }
}
