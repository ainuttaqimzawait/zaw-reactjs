import React from "react";

export default class Conditional extends React.Component {
    render() {
        const isValue = true;
        let massage = "";
        if (isValue) {
            massage = 'anda sudah login';
        } else {
            massage = 'anda belum login';
        }
        return (
            <div>
                <h1>Conditional</h1>
                <h1>{massage}</h1>
            </div>
        )
    }
}