import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import TestTree from "./TakeTest/TestTree";
import { getTest } from "../../store/actions/TestActions";
import QuestionPreview from "./TakeTest/QuestionPreview";

const TestHeader = ({ test }) => {

    return (
        <>
            <h1>Test title: {test.title}</h1>
            <h2>Time limit: {test.time_dependency ? ((test.time_limit_seconds / 60)+ 'min'): 'NO LIMIT'}</h2>
        </>
    )
}

const TestPreview = () => {
    const dispatch = useDispatch();
    const test = useSelector(state => state.test.current)
    const { id } = useParams();

    useEffect(() => {
        console.log('id testa jee :', id)
        dispatch(getTest(id))
    },[dispatch, id])
    
    return (
        <Container>
            <Row style={{margin: '10px', padding: '10px'}}>
                <Col xs={3} style={{margin: '10px'}}>
                {test && (<TestTree test={test} preview={true} />) }
                </Col>
                <Col style={{margin: '10px'}}>
                {test && (
                    <Container>
                        <TestHeader test={test}/>
                        <QuestionPreview />
                    </Container> )}
                </Col> 
                </Row>
        </Container>
    )
}

export default TestPreview;