import { useSelector } from "react-redux";
import GuestNavbar from './GuestNavbar';
import TeacherNavbar from './TeacherNavbar';

const NavBar = () => {
    const isAuthenticated = useSelector(state => state.authUser);

    if (isAuthenticated) {
        return <TeacherNavbar/>;
    } else {
        return <GuestNavbar/>;
    }
}


export default NavBar;