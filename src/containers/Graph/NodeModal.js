import { useDispatch } from 'react-redux';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { createSection } from '../../store/actions/SectionActions';

const NodeModal = ({ partId, show, setShow, fullscreen }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const submit = e => {
        e.preventDefault();
        dispatch(createSection({
            title,
            partId
        }))
        // setShow(false)
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
            <Modal.Title>Add new problem</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="mb-3">
                        <Col xs={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>Title</Form.Label>
                                <Form.Control 
                                    onChange={e => setTitle(e.target.value)} 
                                    type="text" 
                                    placeholder="Title" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button onClick={submit}>
                        <span className="glyphicon glyphicon-saved"></span>
                    </Button>
                </Form>
            </Modal.Body>
      </Modal>
    )
}

export default NodeModal;

