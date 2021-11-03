import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from "react-redux";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { getSections } from '../../store/actions/SectionActions';
import { getParts } from '../../store/actions/PartActions';
import { createItem, getItems } from '../../store/actions/ItemActions';
import InputGroup from 'react-bootstrap/InputGroup';
import { TableBody } from '../../styles';
import Table from 'react-bootstrap/Table';
import OptionModal from './OptionModal';

const ItemInfo = props => {
    const dispatch = useDispatch();
    const sections = useSelector(state => state.section.all);
    const testId = useSelector(state => state.test.current);
    const parts = useSelector(state => state.part.all);
    const items = useSelector(state => state.item.all);
    const [modal, setModal] = useState({show: false, itemId: null});

    const onChange = (field, value) => {
        props.setItemInfo(prevState => {
            let newState = {...prevState};
            newState[field] = value;
            return newState;
        })
    }

    useEffect(() => {
        if (props.itemInfo.partId)
            dispatch(getSections(props.itemInfo.partId))
        else {
            props.setItemInfo(prevState => {
                return {...prevState, sectionId: null}
            })
        }
    }, [props.itemInfo.partId])

    useEffect(() => {
        if (testId) {
            dispatch(getParts(testId));
        }
    }, [testId, dispatch])

    useEffect(() => {
        if (props.itemInfo.sectionId)
            dispatch(getItems(props.itemInfo.sectionId))
    }, [props.itemInfo.sectionId, dispatch])



    const submit = e => {
        e.preventDefault();
        dispatch(createItem(props.itemInfo));
    }

    const openModel = itemId => {
        setModal({show: true, itemId: itemId})
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
                {props.itemInfo.partId && (<Col xs={6} md={4}>
                    <Form.Label>Choose section</Form.Label>
                    <Form.Select aria-label="Part" onChange={e => onChange('sectionId', e.target.value)}>
                        <option value={''} selected></option>
                        {sections.map(section => (
                            <option value={section.id}>{section.title}</option>
                        ))}
                    </Form.Select>
                </Col>)}
            </Row>
            {props.itemInfo.partId && props.itemInfo.sectionId &&
            <div>
            <Row className="mb-3">
                <Col xs={12} md={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Question</Form.Label>
                        <Form.Control 
                            onChange={e => onChange('question', e.target.value)} 
                            type="text" 
                            placeholder="" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={6} md={4}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Score </InputGroup.Text>
                        <Form.Control 
                            required 
                            onChange={e => onChange('score', e.target.value)} 
                            type="number" 
                            value={props.itemInfo.score}   />
                    </InputGroup>
                </Col>
                <Col xs={6} md={4}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Max choices</InputGroup.Text>
                        <Form.Control 
                            required 
                            onChange={e => onChange('maxChoices', e.target.value)} 
                            type="number" 
                            value={props.itemInfo.maxChoices}   />
                    </InputGroup>
                </Col>
            </Row>
            <Button type="submit">Create item</Button>
            <Row>
                <Col xs={12} md={12} sm >
                <Table style={{marginTop: '15px', overflow: 'auto'}} striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Question</th>
                            <th>Add options</th>
                        </tr>
                    </thead>
                    <TableBody>
                        {items.map(item => (
                            <tr>
                                <td>{item.id}</td>
                                <td style={{width: '80%'}}>{item.question}</td>
                                <td style={{textAlign: 'center'}}><span onClick={() => openModel(item.id)} className="glyphicon glyphicon-plus"></span></td>
                            </tr>
                        ))}
                    </TableBody>
                    </Table>
                </Col>
            </Row>
            <OptionModal 
                show={modal.show} 
                setShow={setModal}
                fullscreen={false}
                itemId={modal.itemId}
            />
            </div>}
      </Form>
    )
}

export default ItemInfo;