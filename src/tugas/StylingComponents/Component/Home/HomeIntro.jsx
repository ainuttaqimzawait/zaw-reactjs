import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Intro extends React.Component {
    render() {
        return (
            <div className="container home-intro">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <h1 className="home-intro-name">HALLO, I'M AINUTTAQIM ZAWAIT</h1>
                        <div className="home-intro-info">A Fullstack Defeloper building the Frontend and Backend of Websites and Web Applications that leads to the success of the overall product</div>
                    </div>
                </div>
            </div>
        )
    }
}