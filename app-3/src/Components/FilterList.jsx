import React, {Component} from 'react'

class FilterList extends Component {
    constructor() {
        super ()

        this.state = {
            userInput: '',
            array: ['car', 'boat', 'plane', 'helicopter', 'bus', 'spaceship']
        }
    }

  
    handleChange(value) {
        this.setState({
            userInput: value
        })
    }

    filterArray = () => {
        let filter = this.state.array.filter(value => {
            return value.startsWith(this.state.userInput)
        }).map(value2 => <h2> {value2} </h2>)
        return filter
    }

    render () {
        return (
            <div>
                <input onChange={e => this. handleChange(e.target.value)}></input>
                <div> {this.filterArray()}</div>
            </div>
        )
    }
}


export default FilterList