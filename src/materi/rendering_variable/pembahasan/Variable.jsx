import React from "react";

export default class Variable extends React.Component {
    state = {
        a: null,
        b: true,
        C: "",
        d: 0
    }
    render() {
        return (
            <div>
                <h1>rendering variable</h1>
                <div>a:{this.state.a}</div>
                <div>b:{this.state.b}</div>
                <div>c:{this.state.c}</div>
                <div>d:{this.state.d}</div>
                <div>e:{this.props.e}</div>
            </div>
        )
    }
}