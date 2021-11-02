import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { CREATE_TEST } from '../../routes';

const TeacherNavbar = () => {
    const profile = (<span className="glyphicon glyphicon-user fa-lg"></span>);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
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
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Subjects</Nav.Link>
                    <NavDropdown title="Test" id="basic-nav-dropdown">
                        <NavDropdown.Item href={CREATE_TEST}>Create</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">View all</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Review</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <NavDropdown title={profile} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    ) 
}


export default TeacherNavbar;