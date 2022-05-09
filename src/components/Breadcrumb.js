import React, {Component} from 'react';

const centerCss = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    backgroundImage: `url('https://images.unsplash.com/photo-1649711580630-1caa1f451074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1963&q=80')`,
}

class Breadcrumb extends Component {
    render() {
        return (
            <div style={centerCss}>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default Breadcrumb;