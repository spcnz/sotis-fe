import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container';

import { getOptions, selectedOption } from '../../../store/actions/OptionActions';
import { submitAnswer } from "../../../store/actions/TestActions";

const Question = () => {
    const dispatch = useDispatch();
    const item = useSelector(state => state.item.question)
    console.log('pitanje je : ', item)
    const options = useSelector(state => state.option.all)
    const [optionChecked, setOptionChecked] =  useState([]);
    const [show, setShow] = useState(false)
    const [end, setEnd] = useState(!item)

    useEffect(() => {
        if (item) 
            dispatch(getOptions(item.id))
        setEnd(!item)
    }, [item, dispatch])

    useEffect(() => {
        setOptionChecked(options.map(option => ({ option_id: option.id, checked: false })))
    }, [options])
    

    const submit = () => {
        const result = { responses:  [{ item_id: item.id, options: optionChecked }] }
        dispatch(submitAnswer(result));
        setShow(true);
    }

    const checked = optionId => {
        setOptionChecked(prevState => {
            const idx = prevState.findIndex(option => option.option_id == optionId);
            if (idx == -1)
                return prevState;
            prevState[idx].checked = true;

            return [...prevState];
        })
    }

    return (
        <>
        {item && (
            <Container style={{marginTop: '30px'}}>
                <Row className="mb-12">
                    <h3>{item.question}</h3>
                </Row>
                {options.map(option => (
                    <Row className="mb-3" key={option.id}>
                        <Col xs={1}>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    disabled={true}
                                    value={option.name}
                                    type="text" 
                                   />
                            </Form.Group>
                        </Col>
                        <Col xs={10}>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    disabled={true}
                                    value={option.label}
                                    type="text" 
                                     />
                            </Form.Group>
                        </Col>
                        <Col xs={1}>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check 
                                    defaultChecked={option.checked}
                                    onChange={() => checked(option.id)}   
                                    type="checkbox" 
                                     />
                            </Form.Group>
                        </Col>
                    </Row> 
                ))}
                <Button onClick={submit} variant="danger" style={{margin:'10px'}} >Submit answer </Button>
                {show &&
                    <Alert variant="success" transition={false} dismissible={true} onClose={() => setShow(false)}>
                            Successfully submitted answer
                    </Alert>
                } 
               
            </Container>
            )
        }
         {end &&
                    <Alert variant="success" transition={false} dismissible={true} onClose={() => setEnd(false)}>
                            Successfully finished test
                    </Alert>
                } 
        </>
    );
}

export default Question;