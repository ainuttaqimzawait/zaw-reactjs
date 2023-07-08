import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 'tesla',
            articles: []
        }
    }

    componentDidMount() {
        fetch('https://newsapi.org/v2/everything?q=' + this.state.input + '&from=2023-06-07&sortBy=publishedAt&apiKey=f5d1256f0bd24c3eb5ca73795f655e97')
            .then(response => response.json())
            .then(response => {
                this.setState({ articles: response.articles })
            })
        // .finally(() => document.querySelector('.loading').innerHTML = "");
    }

    handleSubmit = () => {
        this.setState({ input: this.state.input })
        alert(this.state.input)
    }
    render() {
        console.log(this.state.input);
        return (
            <Container style={{ marginTop: "40px" }}>
                <Row>
                    <Col>
                        {/* <Form onSubmit={this.handleSubmit} className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={e => this.setState({ input: e.target.value }, () => console.log(this.state))}
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                        <input type="text" className="myInput" onLoad={e => this.setState({ input: e.target.value }, () => console.log(this.state.input))} placeholder="Search for names.."
                            title="Type in a name" />

                        <h1 style={{ display: "flex", justifyContent: "center" }}>Berita Hari Ini</h1>
                        <div className="loading">
                            <div className="loader2">Loading..</div>
                            <h4>{this.state.input}</h4>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {
                        this.state.articles && this.state.articles.map((m) => {
                            return <Col md={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={m.urlToImage} />
                                    <Card.Body>
                                        <Card.Title>{m.title}</Card.Title>
                                        <Card.Text>{m.description}</Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                        })}
                </Row>
            </Container>
        );
    }
}

export default Body;