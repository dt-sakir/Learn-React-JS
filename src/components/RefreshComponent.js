import React, { Component } from 'react'

export default class RefreshComponent extends Component {
    constructor(){
        super();
        this.refreshNow = this.refreshNow.bind(this);

    }

    refreshNow(){
        this.forceUpdate();
    }

    render() {
        return (
            <div>RefreshComponent
                <button className='btn btn-success' onClick={this.refreshNow}>Refresh now</button>
                <h1>{Math.random()}</h1>
            </div>
        )
    }
}
