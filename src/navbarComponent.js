import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Logo from './logo.svg'
// import Image from 'react-bootstrap/Image';



const NavbarComponent = () => {
    const styleNav = {
        marginLeft: '150px'
    }
    return ( 
        <div className="navbars">
            
                    <Navbar bg="primary" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            {/* <Image src={Logo} className='navHead' /> */}
                            <p className='navHead'>PRUDENCE'S BLOG</p>
                            </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" style={styleNav} >
                            <Nav.Link href="#home">HOME</Nav.Link>
                            <Nav.Link href="/about-us">SPORT</Nav.Link>
                            <Nav.Link href="/about-us">POLITICS</Nav.Link>
                            <Nav.Link href="/about-us">ENTERTAINMENT</Nav.Link>
                            <NavDropdown title="EDUCATION" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">ENTERTAINMENT</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                SUBSCRIBE
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">COMMENT</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Suggestion
                            </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>

        </div>
     );
}
 
export default NavbarComponent;