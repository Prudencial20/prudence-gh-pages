import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './logo.svg'
import Image from 'react-bootstrap/Image';



const NavbarComponent = () => {
    const styleNav = {
        marginLeft: '150px'
    }
    return ( 
        <div className="navbars">
            
                    <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            <Image src={Logo} className='navHead' />
                            <p className='navHead'>Prudence's React </p>
                            </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" style={styleNav} >
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="/about-us">About Us</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
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