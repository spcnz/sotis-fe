import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { createTest } from '../../store/actions/TestActions';

const TestInfo = props => {
    const [checked, setChecked] = useState(props.testInfo.time_dependency);
    const dispatch = useDispatch();

    const onChange = (field, value) => {
        props.setTestInfo(prevState => {
            let newState = {...prevState};
            newState[field] = value;
            return newState;
        })
    }

    const submit = e => {
        e.preventDefault();
        dispatch(createTest(props.testInfo));
        props.setDisabledNextBtn(false);
    }

    return (
        <Form onSubmit={submit}>
            <Row className="mb-3">
                <Col xs={12} md={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Test title</Form.Label>
                        <Form.Control 
                            onChange={e => onChange('title', e.target.value)} 
                            type="text" 
                            placeholder={props.testInfo.title} />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={6} md={4}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check 
                            onChange={() => setChecked(prevState => !prevState)}  
                            defaultChecked={props.testInfo.time_dependency}  
                            type="checkbox" 
                            label="Time dependency" />
                    </Form.Group>
                </Col>
                {checked &&
                    <Col xs={6} md={4}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>min</InputGroup.Text>
                            <Form.Control 
                                required 
                                onChange={e => onChange('time_limit_seconds', e.target.value)} 
                                type="number" 
                                value={props.testInfo.time_limit_seconds}   />
                        </InputGroup>
                    </Col>}
             </Row>
             <Button type="submit">Create test</Button>
      </Form>
    )
}

export default TestInfo;