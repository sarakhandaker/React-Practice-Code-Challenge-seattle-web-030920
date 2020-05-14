import React, { Component } from 'react'

export class Form extends Component {

    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.addMoney(event.target.money.value)
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>How much would you like to add?</label>
                <input name="money" type="number"></input>
                <button type="submit">Add Money!!</button>
            </form>
        )
    }
}

export default Form
