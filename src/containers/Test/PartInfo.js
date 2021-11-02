import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from "react-redux";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'
import { useDispatch } from 'react-redux';
import { createTest } from '../../store/actions/TestActions';
import { getParts } from '../../store/actions/PartActions';

const LINEAR = 'LINEAR';
const NON_LINEAR = 'NON_LINEAR';
const INDIVIDUAL = 'INDIVIDUAL';
const SIMULTANEOUS = 'SIMULTANEOUS';

const PartInfo = props => {
    const dispatch = useDispatch();
    const testId = useSelector(state => state.test.current);
    console.log('u testu', testId)
    const parts = useSelector(state => state.part.all);
    console.log('parts', parts)
    const onChange = (field, value) => {
        props.setPartInfo(prevState => {
            let newState = {...prevState};
            newState[field] = value;
            return newState;
        })
    }

    useEffect(() => {
        dispatch(getParts(testId))
    }, [])

    const submit = e => {
        e.preventDefault();
        dispatch(createTest(props.partInfo))
    }

    return (
        <Form onSubmit={submit}>
            <Row className="mb-3">
                <Col xs={12} md={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Part title</Form.Label>
                        <Form.Control 
                            onChange={e => onChange('title', e.target.value)} 
                            type="text" 
                            placeholder={props.partInfo.title} />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={6} md={4}>
                    <Form.Label>Navigation mode</Form.Label>
                    <Form.Select aria-label="Navigation mode">
                        <option value={LINEAR}>Linear</option>
                        <option value={NON_LINEAR}>Non linear</option>
                    </Form.Select>
                </Col>
                <Col xs={6} md={4}>
                    <Form.Label>Submission mode</Form.Label>
                    <Form.Select aria-label="Submission mode">
                        <option value={INDIVIDUAL}>Individual</option>
                        <option value={SIMULTANEOUS}>Simultaneous</option>
                    </Form.Select>
                </Col>
            </Row>
            <Button type="submit">Create part</Button>
            <Row className="mb-3">
                <Col xs={12} md={12}>
                <Table striped bordered hover style={{marginTop: '15px'}}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parts.map(part => (
                            <tr>
                                <td>{part.id}</td>
                                <td>{part.title}</td>
                            </tr>
                        ))}
                    </tbody>
                    </Table>
                </Col>
            </Row>
      </Form>
    )
}

export default PartInfo;