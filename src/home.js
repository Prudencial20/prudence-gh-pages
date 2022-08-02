// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContentColumn from './contentColumn';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

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
                    <h3>My name is {name}</h3>
                    <Button onClick={handleClick}>Click to change my name</Button>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                            <ContentColumn></ContentColumn>
                           
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                            <ContentColumn></ContentColumn>
                           
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                            <ContentColumn></ContentColumn>
                           
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                            <ContentColumn></ContentColumn>
                           
                        </div>
                    </Col>
                    
                </Row>
        
        </div>

    );
}
 
export default Home;