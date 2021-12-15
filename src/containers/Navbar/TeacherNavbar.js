import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { COURSES, CREATE_TEST, HOME, GRAPH } from '../../routes';

const TeacherNavbar = () => {
    const profile = (<span className="glyphicon glyphicon-user fa-lg"></span>);

    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{margin: 0}}>
            <Container>
                <Navbar.Brand href={HOME} >
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
                    <Nav.Link href={HOME}>Home</Nav.Link>
                    <Nav.Link href={COURSES}>Subjects</Nav.Link>
                    <Nav.Link href={CREATE_TEST}>Create test</Nav.Link>
                    <Nav.Link href={GRAPH}>Knowledge graph</Nav.Link>
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