import { useEffect, useState  } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from "react-redux";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { useDispatch } from 'react-redux';
import { getParts, addPartToTest, getTestParts } from '../../../store/actions/PartActions';
import { TableBody } from '../../../styles';

const LINEAR = 'LINEAR';
const NON_LINEAR = 'NON_LINEAR';
const INDIVIDUAL = 'INDIVIDUAL';
const SIMULTANEOUS = 'SIMULTANEOUS';

const PartInfo = props => {
    const dispatch = useDispatch();
    const testId = useSelector(state => state.test.current);
    const [part, setPart] = useState(null);
    const [navigationMode, setNavigationMode] = useState('');
    const [submissionMode, setSubmissionMode] = useState('');
 
    const parts = useSelector(state => state.part.all);
    const testParts = useSelector(state => state.part.testParts);


    useEffect(() => {
        dispatch(getParts())
        if (testId)
            dispatch(getTestParts(testId))
    }, [testId, dispatch])

    const submit = e => {
        e.preventDefault();
        const partId = part.id;
        dispatch(addPartToTest({ partId, testId }))
    }

    const onPartSelected = partId => {
        const part = parts.find(el => el.id == partId);
        console.log(part)
        if (!part) {
            setSubmissionMode('');
            setNavigationMode('');
            return;
        }  
        setPart(part);
        setSubmissionMode(part.submission);
        setNavigationMode(part.navigation);
    }

    return (
        <Form onSubmit={submit}>
            <Row className="mb-3">
                <Col xs={12} md={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Part title</Form.Label>
                        <Form.Select aria-label="Navigation mode" onChange={e => onPartSelected(e.target.value)}>
                            {parts.map(part => (
                                <option key={part.id} value={part.id}>{part.title}</option>
                            ))}
                            <option selected key={0} value={''}></option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={6} md={4}>
                    <Form.Label>Navigation mode</Form.Label>
                    <Form.Control 
                            type="text" 
                            placeholder={navigationMode} 
                            disabled
                    />
                </Col>
                <Col xs={6} md={4}>
                    <Form.Label>Submission mode</Form.Label>
                    <Form.Control 
                            type="text" 
                            placeholder={submissionMode} 
                            disabled
                            />
                </Col>
            </Row>
            <Button type="submit">Add part</Button>
            <Row>
                <Col xs={12} md={12} sm >
                <Table style={{marginTop: '15px', overflow: 'auto'}} striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <TableBody>
                        {testParts.map(part => (
                            <tr>
                                <td>{part.id}</td>
                                <td>{part.title}</td>
                            </tr>
                        ))}
                    </TableBody>
                    </Table>
                </Col>
            </Row>
      </Form>
    )
}

export default PartInfo;