import React, { Component } from 'react' 

class ArrayList extends Component {
    constructor () {
        super()

        this.state = {
            array: ['Steven', 'Ryan', 'Spencer', 'Caleb']
        }
    }

    addToArray () {
        let display = this.state.array.map(value => {
            return <div key={value}>{value}</div>
        })
        return display
    }

   

    render () {
        return (
            <div>
                <h1>{this.addToArray()}</h1>
            </div>
        )
    }
}

export default ArrayList