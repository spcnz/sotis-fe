import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from "react-redux";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { useDispatch } from 'react-redux';
import { getSections, createSection } from '../../../store/actions/SectionActions';
import { getParts } from '../../../store/actions/PartActions';
import { TableBody } from '../../../styles';


const SectionInfo = props => {
    const dispatch = useDispatch();
    const testId = useSelector(state => state.test.current);
    const parts = useSelector(state => state.part.all);
    const sections = useSelector(state => 
        props.sectionInfo.partId in state.section.all ? 
            state.section.all[props.sectionInfo.partId]: []);
    const onChange = (field, value) => {
        props.setSectionInfo(prevState => {
            let newState = {...prevState};
            newState[field] = value;
            return newState;
        })
    }

    useEffect(() => {
        if (testId) {
            dispatch(getParts(testId));
        }
    }, [testId, dispatch])

    useEffect(() => {
        if (props.sectionInfo.partId)
            dispatch(getSections(props.sectionInfo.partId))
    }, [props.sectionInfo.partId, dispatch])

    const submit = e => {
        e.preventDefault();
        dispatch(createSection(props.sectionInfo))
    }

    return (
        <Form onSubmit={submit}>
            <Row className="mb-3">
                <Col xs={6} md={4}>
                    <Form.Label>Choose part</Form.Label>
                    <Form.Select aria-label="Part" onChange={e => onChange('partId', e.target.value)}>
                        <option value={''} selected></option>
                        {parts.map(part => (
                            <option value={part.id}>{part.title}</option>
                        ))}
                    </Form.Select>
                </Col>
            </Row>
            {props.sectionInfo.partId &&
            <div>
            <Row className="mb-3">
                <Col xs={12} md={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Section title</Form.Label>
                        <Form.Control 
                            onChange={e => onChange('title', e.target.value)} 
                            type="text" 
                            placeholder="" />
                    </Form.Group>
                </Col>
            </Row>
            <Button type="submit">Create section</Button>
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
                        {sections.map(section => (
                            <tr>
                                <td>{section.id}</td>
                                <td>{section.title}</td>
                            </tr>
                        ))}
                    </TableBody>
                    </Table>
                </Col>
            </Row>
            </div>}
      </Form>
    )
}

export default SectionInfo;