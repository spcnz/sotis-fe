import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { CREATE_TEST, LOGOUT } from '../../routes';
import authService from '../../services/AuthService';
import {useDispatch} from 'react-redux';
import { logOut, logOutAction } from '../../store/actions/AuthActions';
import { useHistory, withRouter } from 'react-router';

const StudentNavbar = (props) => {
    const dispatch = useDispatch();
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
                    <Nav.Link href="#link">Results</Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown title={profile} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {dispatch(logOutAction());}} >Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    ) 
}


export default StudentNavbar;
