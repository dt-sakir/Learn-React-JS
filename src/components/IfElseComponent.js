import React, { Component } from 'react'

export default class IfElseComponent extends Component {
    constructor() {
        super()

        this.state = {
            login: true
        }
    }
    render() {
        return (
            this.state.login ?
                (
                    <div>
                        <h4>Login</h4>
                    </div>
                ) :
                (
                    <div>
                        <h4>Logout</h4>
                    </div>
                )
        )
    }
}