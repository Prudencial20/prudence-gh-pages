import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import logo from './logo.svg'
import SubmissionForm from "./submissionform";

const FooterComponent = () => {
    return (  
        <footer className="bg-primary p-2" >
            <Row className='container-fluid mt-5 mb-5'>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                          <img src={logo} style= {{maxWidth : '70px'}} alt="my logo"/>
                          <p className="text-light">
                            Prudence's Blog
                          </p>
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                          <h3 className="text-light">
                            Politics
                          </h3>
                          <p className="text-light">
                            Peter Obi is contesting with Ahmed of labour party
                            go get your PVC.
                          </p>
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                           <h3 className="text-light">
                             Sport
                           </h3>
                          <p className="text-light">
                            Oluwatobi Amusan has created a World Record and made Nigerians 
                            all over the world happy.
                          </p>
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                          <h3 className="text-light">
                            Comment
                          </h3>
                          <SubmissionForm />
                        </div>
                    </Col>
            </Row>
        </footer>
    );
}
 
export default FooterComponent;