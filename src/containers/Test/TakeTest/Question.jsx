import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


import { getOptions } from '../../../store/actions/OptionActions';
import { setItem } from '../../../store/actions/ItemActions';

import { SIMULTANEOUS, INVIDIVIDUAL } from '../../../consts';

const Question = () => {
    const dispatch = useDispatch();
    const item = useSelector(state => state.item.current)
    const itemsBySection = useSelector(state => state.item.all)
    const submission = useSelector(state => state.part.current.submission)
    const options = useSelector(state => state.option.all)

    useEffect(() => {
        if (item)
            dispatch(getOptions(item.id))
    }, [item])
    console.log("RE RENDER QUESTION-a ", item)
    
    const onPrevious = () => {
        const items = itemsBySection[item.section_id]
        console.log('heree')
        const currentIndex = items.findIndex(el => el.id == item.id);
        console.log(currentIndex)
        if (currentIndex != 0)
            dispatch(setItem(items[currentIndex - 1]))
    }   

    const onNext = () => {
        const items = itemsBySection[item.section_id]
        const currentIndex = items.findIndex(el => el.id == item.id);
        if (currentIndex != (items.length - 1))
            dispatch(setItem(items[currentIndex + 1]))
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
                                    defaultChecked={false}  
                                    type="checkbox" 
                                     />
                            </Form.Group>
                        </Col>
                    </Row> 
                ))}
                <Row className="mb-3">
                    <Col xs={1}>
                        <Button onClick={onPrevious}>
                            Previous
                        </Button>
                    </Col>
                    <Col xs={10}>
                    </Col>
                    <Col xs={1} onClick={onNext}>
                        <Button>
                            Next
                        </Button>
                    </Col>
                </Row>
                <Button variant="danger" style={{margin:'10px'}} >Submit {submission == SIMULTANEOUS ? 'part': 'question'}</Button>

            </Container>
            )
        }
        </>
    );

}

export default Question;