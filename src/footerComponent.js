import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import logo from './logo.svg'
import SubmissionForm from "./submissionform";

const FooterComponent = () => {
    return (  
        <footer className="bg-dark p-2" >
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
                            Address
                          </h3>
                          <p className="text-light">
                            Creating beautiful simple page applications using react
                            and React bootstrap
                          </p>
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                           <h3 className="text-light">
                             Contact Us
                           </h3>
                          <p className="text-light">
                            Creating beautiful simple page applications using react
                            and React bootstrap
                          </p>
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                          <h3 className="text-light">
                            Subscribe
                          </h3>
                          <SubmissionForm />
                        </div>
                    </Col>
            </Row>
        </footer>
    );
}
 
export default FooterComponent;