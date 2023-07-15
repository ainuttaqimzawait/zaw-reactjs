import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

const LiveChat = () => {
    return (
        <div className="home-chat">
            <Button variant="none">
                <div className="home-live-chat d-flex">
                    <p className="home-chat-text">Chat whith me</p>
                    <img
                        src="image/chat-logo.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top image-chat"
                        alt=""
                    />
                </div>
            </Button>

        </div>
    )
}
export default LiveChat;