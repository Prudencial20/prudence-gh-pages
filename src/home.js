// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContentColumn from './contentColumn';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import wiz from './images/wiz.jpg'
import asuu from './images/asuu.jpg'
import okow from './images/okow.jpg'

const Home = () => {
    // let styleHome = {
    //     border : '1px solid black'
    // }
    // let name = "Prudence"
    const [name, setName] = useState('Eki')
    console.log(name);
    const handleClick = () => {
        setName("Prudence");
        console.log(name);
    }
    return (
        <div>
            <Row className='container-fluid mt-5'>
                <Button onClick={handleClick}>TOP STORIES</Button>
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                        <ContentColumn></ContentColumn>

                    </div>
                </Col>
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={wiz} />
                            <Card.Body>
                                <Card.Title>Entertainment</Card.Title>
                                <Card.Text>
                                    Machala Fans has made a song for him -Prudence Eki.
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>

                    </div>
                </Col>
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                       <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={asuu} />
                            <Card.Body>
                                <Card.Title>Education</Card.Title>
                                <Card.Text>
                                    ASUU Extends Strike with Four Weeks due to Federal government incapability -Adamu Adamu.
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card> 

                    </div>
                </Col>
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={okow} />
                            <Card.Body>
                                <Card.Title>Governor Okowa</Card.Title>
                                <Card.Text>
                                    Governor Ifeanyi OKowa has been tagged the empowerment Governor and the road master -Adamu Christain.
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card> 

                    </div>
                </Col>

            </Row>

        </div>

    );
}

export default Home;