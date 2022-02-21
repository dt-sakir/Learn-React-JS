import React, { Component } from 'react'
import Login from './Login'
import Home from './Home'

export default class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }

  render() {
    //   Use if else
    //   if(this.state.isLoggedIn){
    //     return(<Home />);
    //   }else{
    //     return(<Login />);
    //   }

    //   use element
    const {isLoggedIn} = this.state;
    let element;
    // if(this.state.isLoggedIn){
    //     element = <Home />
    //   }else{
    //     element = <Login />
    //   }
    //   return element;

    //   use tarnary condition
    // element = isLoggedIn ? <Home /> : <Login />
    // return(
    //     <div>{element}</div>
    // );
    // use in jsx
    return(
        <div>
            {isLoggedIn ? <Home /> : <Login />}
        </div>
    )
  }
}
