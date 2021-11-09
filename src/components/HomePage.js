import { useSelector } from "react-redux";

import { STUDENT, TEACHER } from '../consts';
import StudentDashboard from "../containers/Dashboard/StudentDashboar";
import { BackgroundImage, Title } from "../styles";


const HomePage = () => {

    const isAuthenticated = useSelector(state => state.authUser.isAuth);
    const role = useSelector(state => state.authUser.role);
    
    if (isAuthenticated) {
        switch(role){
            case TEACHER: return <StudentDashboard />;
            default:
                return (
                   <BackgroundImage>
                       <Title>Study smart.</Title>
                   </BackgroundImage>
                )
        }
    } else {
        return (
            <BackgroundImage>
                <Title>Study smart.</Title>
            </BackgroundImage>
         )
    }
}


export default HomePage;