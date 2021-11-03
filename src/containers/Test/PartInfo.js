import { useEffect  } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from "react-redux";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { getParts, createPart } from '../../store/actions/PartActions';
import { TableHead, TableBody, TableRow, Table } from '../../styles';

const LINEAR = 'LINEAR';
const NON_LINEAR = 'NON_LINEAR';
const INDIVIDUAL = 'INDIVIDUAL';
const SIMULTANEOUS = 'SIMULTANEOUS';

const PartInfo = props => {
    const dispatch = useDispatch();
    const testId = useSelector(state => state.test.current);
    const parts = useSelector(state => state.part.all);

    const onChange = (field, value) => {
        props.setPartInfo(prevState => {
            let newState = {...prevState};
            newState[field] = value;
            return newState;
        })
    }

    useEffect(() => {
        dispatch(getParts(testId))
    }, [testId])

    const submit = e => {
        e.preventDefault();
        dispatch(createPart({ partInfo: props.partInfo, testId }))
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
                            placeholder="" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={6} md={4}>
                    <Form.Label>Navigation mode</Form.Label>
                    <Form.Select aria-label="Navigation mode" onChange={e => onChange('navigation_mode',e.target.value)}>
                        <option value={LINEAR}>Linear</option>
                        <option value={NON_LINEAR}>Non linear</option>
                    </Form.Select>
                </Col>
                <Col xs={6} md={4}>
                    <Form.Label>Submission mode</Form.Label>
                    <Form.Select aria-label="Submission mode" onChange={e => onChange('submission_mode', e.target.value)}>
                        <option value={SIMULTANEOUS}>Simultaneous</option>
                        <option value={INDIVIDUAL}>Individual</option>
                    </Form.Select>
                </Col>
            </Row>
            <Button type="submit">Create part</Button>
            <Row>
                <Col xs={12} md={12}>
                <Table striped bordered hover style={{marginTop: '15px', tableLayout: 'fixed'}} >
                    <TableHead>
                        <TableRow>
                            <th>#</th>
                            <th>Title</th>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {parts.map(part => (
                            <TableRow>
                                <td>{part.id}</td>
                                <td>{part.title}</td>
                            </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </Col>
            </Row>
      </Form>
    )
}

export default PartInfo;