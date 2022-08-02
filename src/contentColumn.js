import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Peter2 from './images/Peter2.jpg'

const ContentColumn = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Peter2} />
                <Card.Body>
                    <Card.Title>Politics</Card.Title>
                    <Card.Text>
                        Peter Obi of the Labour Party is the only hope for Nigeria -Daniel Odiachi
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ContentColumn;