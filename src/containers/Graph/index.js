import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";


import { Container, Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'

import NodeModal from './NodeModal';
import D3Graph from "./D3Graph";
import { getSections } from '../../store/actions/SectionActions';
import { createPart } from '../../store/actions/PartActions';
import LinkModal from './LinkModal';

const GraphContainer = () => {

    const partId = useSelector(state => state.part.current.id);
    const sections = useSelector(state => state.section.all);
    console.log(sections, 'sekcije suu')

    const links = useSelector(state => state.graph.links);
    const [show, setShow] = useState(false);
    const [showLinkModal, setShowLinkModal] = useState(false);
    const [alert, setAlert] = useState({show: false, msg: '', variant: ''});
    const [domain, setDomain] = useState({ name : '', id: null});
    const dispatch = useDispatch();

    useEffect(() => {
        if (partId)
            dispatch(getSections(partId))
    }, [partId, dispatch])

    const data = {
        nodes:  sections || [],
        links: links || []

      };

    const addDomain = () => {
        //jos jedan od razloga da izmestimo partove van grafa, ntestId je nebitan
        dispatch(createPart({'partInfo': {
            'navigation_mode':'LINEAR', 
            'submission_mode': 'SIMULTANEOUS', 
            'title': domain.name
        },
        testId: 1
    }))
        setAlert({show: true, msg: 'Successfully added new domain!', variant: 'success'})
    }

    const setName = value => {
        setDomain(prevState => {
            let newState = {...prevState};
            newState.name = value;
            return newState;
        })
    }


    return (
        <Container>
            <Row style={{margin: '10px', padding: '10px'}}>
                <Col xs={2} stule={{margin: '10px'}}>
                    <Form.Group className="mb-3">
                        <Form.Label>New domain: </Form.Label>
                        <Form.Control 
                           onChange={e => setName(e.target.value)} 
                            type="text" 
                            placeholder="Title" />
                    </Form.Group>
                    <Button onClick={addDomain}>
                         Save
                    </Button>
                </Col>
                <Col xs={10} >
                <D3Graph data={data}/>
                </Col>
            </Row>
            <Row style={{margin: '10px', padding: '10px'}}>
                <Col xs={2} >
                    <Button onClick={() => setShow(true)}>
                        Add new section <span style={{marginLeft:4}} className="glyphicon glyphicon-plus"/>
                    </Button>
                </Col>
                <Col xs={2} >
                    <Button onClick={() => setShowLinkModal(true)}>
                        Link sections <span style={{marginLeft:4}} className="glyphicon glyphicon-plus"/>
                    </Button>
                </Col>
                <Col xs={3}>
                {alert.show &&
                    <Alert variant={alert.variant} transition={false} dismissible={true} onClose={() => setAlert({show: false})}>
                            {alert.msg}
                    </Alert>
                }        
                </Col>
            </Row>
            <NodeModal 
                show={show} 
                setShow={setShow}
                fullscreen={false}
                partId={partId}
                setAlert={setAlert}
            />
            <LinkModal 
                show={showLinkModal} 
                setShow={setShowLinkModal}
                fullscreen={false}
                partId={partId}
                data={sections}
            /> 
        </Container>
    )
}


export default GraphContainer;