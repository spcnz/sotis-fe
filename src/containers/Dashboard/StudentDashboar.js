import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSubjects } from '../../store/actions/SubjectActions';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import course_img from '../../assets/course_img.png';

const StudentDashboard = () => {
    const dispatch = useDispatch();
    let subjects = useSelector(state => state.subject.all);
    
    useEffect(() => {
        dispatch(getSubjects())
    },[])

    return (
        <Container>
            <Row style={{margin: '10px', padding: '10px'}}>
            {subjects.map(subject => (
                <Col style={{margin: '10px'}}>
                    <Card style={{ width: '30rem' }} >
                        <Card.Img variant="top" src={course_img} />
                        <Card.Body>
                            <Card.Title>{subject.name}</Card.Title>
                            <Card.Text>
                                {subject.description}
                            </Card.Text>
                            <Button variant="primary">View tests</Button>
                        </Card.Body>
                    </Card>
                </Col>))}
            </Row>
            </Container>
    )
}


export default StudentDashboard;