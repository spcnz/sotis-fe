import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import D3Graph from "./D3Graph";

import { Container, Row, Col, Button } from "react-bootstrap";
import NodeModal from './NodeModal';

import { getSections } from '../../store/actions/SectionActions';

const GraphContainer = () => {
    const partId = 1;
    const sections = useSelector(state => state.section.all[partId]);
    console.log(sections)
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
        if (partId)
            dispatch(getSections(partId))
    }, [partId])

    const data = {
        nodes: sections,
        links: []

      };



    return (
        <Container>
            <Row style={{margin: '10px', padding: '10px'}}>
                <D3Graph data={data}/>
            </Row>
            <Row style={{margin: '10px', padding: '10px'}}>
                <Col xs={2} >
                    <Button onClick={() => setShow(true)}>
                        Add new section <span style={{marginLeft:4}} className="glyphicon glyphicon-plus"/>
                    </Button>
                </Col>
            </Row>
            <NodeModal 
                show={show} 
                setShow={setShow}
                fullscreen={false}
                partId={partId}
            />
        </Container>
    )
}


export default GraphContainer;