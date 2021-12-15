import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import TestTree from "./TestTree";
import Question from "./Question";
import { getTest } from '../../../store/actions/TestActions';
import { setOptionResults } from "../../../store/actions/OptionActions";

const TestInfo = ({ test }) => {

    return (
        <>
            <h1>You are taking a test: {test.title}</h1>
            <h2>Time limit: {test.time_dependency ? ((test.time_limit_seconds / 60)+ 'min'): 'NO LIMIT'}</h2>
        </>
    )
}

const TakeTest = () => {
    const dispatch = useDispatch();
    const test = useSelector(state => state.test.current)
    const { id } = useParams();

    useEffect(() => {
        dispatch(getTest(id))
    },[dispatch, id])

    useEffect(() => {
        let options = []
        test?.parts?.forEach(part => {
            part.sections?.forEach(section => {
                section.items?.forEach(item => options.push({
                    item_id: item.id,
                    options: item.options
                }))
            })
        })
        dispatch(setOptionResults(options))
    }, [dispatch, test])

    
    return (
        <Container>
            <Row style={{margin: '10px', padding: '10px'}}>
                <Col xs={3} style={{margin: '10px'}}>
                {test && (<TestTree test={test} />) }
                </Col>
                <Col style={{margin: '10px'}}>
                {test && (
                    <Container>
                        <TestInfo test={test}/>
                        <Question />
                    </Container> )}
                </Col> 
                </Row>
        </Container>
    )
}

export default TakeTest;