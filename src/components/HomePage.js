import { useSelector } from "react-redux";

import { STUDENT, TEACHER } from '../consts';
import StudentDashboard from "../containers/Dashboard/StudentDashboar";
import SubjectsPage from "../containers/Subject";
import { BackgroundImage, Title } from "../styles";


const HomePage = () => {

    const isAuthenticated = useSelector(state => state.authUser.isAuth);
    const role = useSelector(state => state.authUser.role);
    
    return (
        <BackgroundImage>
            <Title>Study smart.</Title>
            {isAuthenticated && role == STUDENT && <StudentDashboard />}
            

        </BackgroundImage>
    )
}


export default HomePage;