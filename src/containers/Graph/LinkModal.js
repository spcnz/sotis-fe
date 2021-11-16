import { useDispatch } from 'react-redux';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { linkNodes } from '../../store/actions/GraphActions';

const LinkModal = ({ partId, show, setShow, fullscreen, data, id }) => {
    const dispatch = useDispatch();
    const [source, setSource] = useState(null);
    const [target, setTarget] = useState(null);

    const submit = e => {
        e.preventDefault();
        dispatch(linkNodes({ 
            'link': {
                    source,
                    target
                },
            'domainId': id
        }))
        setShow(false)
    }


    return (
        <Modal 
            size="sm" 
            animation={false} 
            centered show={show} 
            fullscreen={fullscreen} 
            onHide={() => setShow(false)}
        >
            <Modal.Header closeButton>
            <Modal.Title>Link nodes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="mb-3">
                        <Col xs={5}>
                            <Form.Label>Choose source</Form.Label>
                            <Form.Select aria-label="Part" onChange={e => setSource(parseInt(e.target.value))}>
                                <option value={''} selected></option>
                                {data.map(section => (
                                    <option key={section.id} value={section.id}>{section.title}</option>
                                ))}
                            </Form.Select>
                        </Col>
                        <Col xs={2} className="row align-items-center">
                            <span style={{ marginTop: '15px'}} className="glyphicon glyphicon-arrow-right"></span>
                        </Col>
                        <Col xs={5} >
                            <Form.Label>Choose target</Form.Label>
                            <Form.Select aria-label="target" onChange={e => setTarget(parseInt(e.target.value))}>
                                <option value={''} selected></option>
                                {data.map(section => (
                                    <option key={section.id}  value={section.id}>{section.title}</option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Row>
                    <Button onClick={submit} style={{marginTop:'10px'}}>
                        Link
                    </Button>
                </Form>
            </Modal.Body>
      </Modal>
    )
}

export default LinkModal;

