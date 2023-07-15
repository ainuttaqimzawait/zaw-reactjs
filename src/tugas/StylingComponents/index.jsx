import React from "react";
import NavigationBar from "./Component/Home/Navbar";
import HomeContact from "./Component/Home/HomeContact";
import Intro from "./Component/Home/HomeIntro";
import LiveChat from "./Component/Home/HomeLiveChat";
import "./Style/LandingPage.css";

export default class StylingComponent extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <HomeContact />
                <Intro />
                <LiveChat />
            </div>
        )
    }
}