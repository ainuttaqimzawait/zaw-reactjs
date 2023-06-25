import React from "react";
class ClassComponent extends React.Component {

    state = {
        value: 10
    }

    handleMinus = () => {
        if (this.state.value > 0) {
            this.setState({ value: this.state.value - 10 })
        }
    }

    handlePlus = () => {
        this.setState({ value: this.state.value + 10 })
    }

    render() {
        return (
            <div>
                <h1>SELAMAT DATANG DI WEBSITE KAMI</h1>
                <h2>Silahkan Ubah Ukuran Font di Bawah Ini</h2>
                <button onClick={this.handleMinus}>Zoom Out</button>
                <span style={{ fontSize: `${this.state.value}px` }}> Hello World </span>
                <button onClick={this.handlePlus}>Zoom In</button>
                <h2>Ukuan font kata diatas adalah {this.state.value} px</h2>
            </div >
        )
    }
}

export default ClassComponent;