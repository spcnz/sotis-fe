import { Navbar, Nav, Container } from 'react-bootstrap';
import { LOGIN } from '../../routes'

const GuestNavbar = () => {
    
    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{margin: 0}}>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href={LOGIN}>Login</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    ) 
}


export default GuestNavbar;