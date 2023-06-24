import React from "react";
import ClassComponent from "./pembahasan/classComponent";
import functionalComponent from "./pembahasan/functionalComponent";

export default class Komponen extends React.Component {
    render() {
        return (
            <div>
                <ClassComponent />
                <functionalComponent />
            </div>
        )
    }
}