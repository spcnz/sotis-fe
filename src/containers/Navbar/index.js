import { useSelector } from "react-redux";

import GuestNavbar from './GuestNavbar';
import TeacherNavbar from './TeacherNavbar';
import StudenNavbar from './StudentNavbar';
import { TEACHER, STUDENT } from '../../consts';

const NavBar = () => {
    const isAuthenticated = useSelector(state => state.authUser.isAuth);
    const role = useSelector(state => state.authUser.role);

    if (isAuthenticated) {
        switch(role){
            case TEACHER: return <TeacherNavbar />;
            case STUDENT: return <StudenNavbar />;
            default:
                return <GuestNavbar />
        }
    } else {
        return <GuestNavbar/>;
    }
}


export default NavBar;