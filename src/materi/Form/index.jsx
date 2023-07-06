import React from "react";
import FormElement from "./pembahasan/FormElement";
import "./style.css";
// import Falidation from "./pembahasan/Falidation";

export default class Form extends React.Component {
    render() {
        return (
            <div>
                <FormElement username="edi" />
                {/* <Falidation /> */}
            </div>
        )
    }
}