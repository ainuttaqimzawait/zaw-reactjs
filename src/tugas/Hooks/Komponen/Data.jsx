import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Row } from "react-bootstrap";


const GetData = () => {
    const [data, setData] = useState([]);
    // const [loading, setLoading]= useState(false);
    // const [error, setError]= useState(null);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-06-13&sortBy=publishedAt&apiKey=f5d1256f0bd24c3eb5ca73795f655e97')
            // https://newsapi.org/v2/everything?q=' + data + '&from=2023-06-13&sortBy=publishedAt&apiKey=f5d1256f0bd24c3eb5ca73795f655e97')
            .then(response => response.json())
            .then(response => {
                console.log('respose:', response)
                setData(response.articles)
            })
    })
    return (
        <div>
            <input type="text" className="myInput" onChange={e => this.setState({ input: e.target.value }, () => console.log(this.state.input))} placeholder="Search for names.."
                title="Type in a name" />
            <Row>
                {data.map((m) => {
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
        </div>
    )
}
export default GetData;