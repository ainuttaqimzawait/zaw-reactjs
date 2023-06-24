import React from "react";
import ClassComponent from "./pembahasan/classComponent";
import FunctionalComponent from "./pembahasan/funcomponent";

export default class Komponen extends React.Component {
    render() {
        return (
            <div>
                <ClassComponent nama="ade irawan" />
                <FunctionalComponent nama="dea prakoso" />
            </div>
        )
    }
}