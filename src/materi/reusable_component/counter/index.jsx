import React from "react";

export default class Counter extends React.Component {
    state = {
        value: 0
    }

    handleMinus = () => {
        if (this.state.value > 0) {
            this.setState({ value: this.state.value - 1 }, () => this.props.receiveValue(this.state.value))
        }
    }

    handlePlus = () => {
        this.setState({ value: this.state.value + 1 }, () => this.props.receiveValue(this.state.value))
    }

    render() {
        return (
            <div style={{ width: "18rem", backgroundColor: "lightblue", display: "flex", justifyContent: "center" }}>
                <button onClick={this.handleMinus}>-</button>
                <span>{this.state.value}</span>
                <button onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}