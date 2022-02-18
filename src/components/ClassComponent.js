// Class component
import React, {Component} from 'react';

export default class ClassComponent extends Component{
    render() {
       return (
       <div style={{ backgroundColor:this.props.backgroundColor, color:'white', padding:'20px' }}>
           <h3 >This is class component. & bacground color is: {this.props.backgroundColor}</h3>
       </div>
       );
    }
}