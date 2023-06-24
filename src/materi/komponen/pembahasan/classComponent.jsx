import React from "react";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
        this.handleMinus = this.handleMinus.bind(this);
        this.handlePlus = this.handlePlus.bind(this);
    }

    handleMinus() {
        if (this.state.value > 0) {
            this.setState({ value: this.state.value - 1 });
        }
    }

    handlePlus() {
        this.setState({ value: this.state.value + 1 });
    }
    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <h2>halo {this.props.nama}</h2>
                <button onClick={this.handleMinus}>-</button>
                <span>{' '}{this.state.value}{' '}</span>
                <button onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}
export default ClassComponent;