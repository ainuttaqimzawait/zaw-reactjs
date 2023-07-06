import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Bar extends React.Component {

    render() {
        return (
            <nav style={{ height: "50px", width: "18rem", backgroundColor: "yellow" }}>
                <h5>{this.props.value}</h5>
            </nav>
        )
    }
}