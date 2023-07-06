import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from "react-bootstrap";
import Counter from "../counter";


export default class Product extends React.Component {

    handleValue = (value) => {
        this.props.receiveValue(value)
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="imgkurban.jpg" style={{ height: "180px" }} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Counter receiveValue={this.handleValue} />
            </Card>
        )
    }
}