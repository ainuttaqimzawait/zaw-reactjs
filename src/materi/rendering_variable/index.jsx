import React from "react";
import Variable from "./pembahasan/Variable";
import Conditional from "./pembahasan/Conditional";
import List from "./pembahasan/List";

export default class Rendering extends React.Component {
    render() {
        return (
            <div>
                <Variable />
                <Conditional />
                <List />
            </div>
        )
    }
}