import React , { Component } from 'react'

class Header extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <div className = 'headerDetails'>
                <h1>Tip Calculator</h1>
                <h6> Build in React Hooks</h6>
            </div>
        )
    }
}

export default Header