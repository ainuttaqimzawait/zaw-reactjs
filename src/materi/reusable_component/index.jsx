import React from "react";
import Halo from "./halo.jsx"
import Product from "./product";
import Bar from "./bar";

class ReusebleComponent extends React.Component {
    state = {
        value: 0
    }

    handleValue = (data) => {
        this.setState({ value: data })
    }

    render() {
        return (
            <div className="container" style={{ backgroundColor: "green" }}>
                <Halo nama="ade irawan" />
                <Halo nama="aderai" />
                <Bar value={this.state.value} />
                <Product receiveValue={this.handleValue} />
            </div>
        )
    }
}
export default ReusebleComponent;