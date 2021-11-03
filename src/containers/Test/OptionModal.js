import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { TableBody } from '../../styles';
import Table from 'react-bootstrap/Table';


import { getOptions, createOption} from '../../store/actions/OptionActions';


const OptionModal = props => {
    const dispatch = useDispatch();
    const options = useSelector(state => state.option.all);
    const [checked, setChecked] = useState(false);

    const [optionInfo, setOptionInfo] = useState({
        name: '',
        label: '',
        correct: false
    })
    console.log(optionInfo);
    useEffect(() => {
        if (props.itemId) {
            dispatch(getOptions(props.itemId));
        }
    }, [props.itemId])

    const onChange = (field, value) => {
        setOptionInfo(prevState => {
            let newState = {...prevState};
            newState[field] = value;
            return newState;
        })
    }

    const submitForm = () => {    
        dispatch(createOption({...optionInfo, correct: checked, itemId : props.itemId}));
    }

    return (
        <Modal size="lg" animation={false} centered show={props.show} fullscreen={props.fullscreen} onHide={() => props.setShow({show: false, itemId: null})}>
            <Modal.Header closeButton>
            <Modal.Title>Options for question : {props.itemId}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="mb-3">
                        <Col xs={1}>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    onChange={e => onChange('label', e.target.value)} 
                                    type="text" 
                                    placeholder="Label" />
                            </Form.Group>
                        </Col>
                        <Col xs={8}>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    onChange={e => onChange('name', e.target.value)} 
                                    type="text" 
                                    placeholder="Option text" />
                            </Form.Group>
                        </Col>
                        <Col xs={2}>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check 
                                    onChange={() => setChecked(prevState => !prevState)}  
                                    defaultChecked={false}  
                                    type="checkbox" 
                                    label="CORRECT" />
                            </Form.Group>
                        </Col>
                        <Col xs={1} >
                            <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{ alignItems: 'center'}}>
                                <Button onClick={submitForm}>
                                    <span className="glyphicon glyphicon-saved"></span>
                                </Button>
                            </Form.Group>
                        </Col>
                    </Row> 
                    <Row>
                        <Col xs={12} md={12} sm >
                        <Table style={{marginTop: '15px', overflow: 'auto'}} striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Label</th>
                                    <th>Question text</th>
                                    <th>Correct</th>
                                </tr>
                            </thead>
                            <TableBody>
                                {options.map(option => (
                                    <tr>
                                        <td>{option.id}</td>
                                        <td>{option.label}</td>
                                        <td style={{width: '80%'}}>{option.name}</td>
                                        <td>{option.correct_answer? 'YES': 'NO'}</td>
                                    </tr>
                                ))}
                            </TableBody>
                            </Table>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
      </Modal>
    )
}

export default OptionModal;

