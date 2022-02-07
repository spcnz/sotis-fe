import { dispatch } from "d3-dispatch";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import D3Graph from "../Graph/D3Graph";
import { Container, Row, Col } from "react-bootstrap";

import { compareResults } from "../../store/actions/TestActions";

const TestResults = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const [ksExpected, setKsExpected] = useState({
        nodes: [],
        links: []
    })
    const [ksReal, setKsReal] = useState({
        nodes: [],
        links: []
    })

    const probs = useState([])

    const results = useSelector(state => state.test.results)

    const generateId = node => {
        if (node.problem.length == 1)

            return node.problem[0].id;
        else {
            let id = "";
            node.problem.forEach(prob => id += `${prob.id},`)
            return id.slice(0, -1)
        }
    }

    useEffect(() => {
        dispatch(compareResults(1))
    },[dispatch])


    const transformNodeLinks = graph => {
        console.log('Graf je :', graph)
        const nodes = graph.map(graph => ({ id: generateId(graph)}))
        let links = []
        graph.forEach(graph => {
            if (graph.target_problems.length > 0) {
                graph.target_problems.forEach(node => {
                    let target = node.problem.length == 1 ? node.problem[0].id : ""
                    if (target === "")
                        target = generateId(node);

                    links.push({ 
                        source: generateId(graph),
                        target
                        }
                    )
                })
            }})
        return { nodes, links };
    }

    const nodesDifferences = (nodes_expected, nodes_real) => {
        const colored_expected = nodes_expected.map(node => {
            if (!nodes_real.find(el => el.id == node.id)) {
                console.log('tuu')
                return {...node, color: "red"}
            }
            else return {...node, color: "#d3d3d3" }
        })
            
        return colored_expected
    }

    const linksDifferences = (links_expected, links_real) => {
        const colored_expected = links_expected.map(link => {
            if (!links_real.find(el => el.source == link.source && el.target == link.target)) {
                console.log('tuu')
                return {...link, color: "red"}
            }
            else return {...link, color: "#d3d3d3" }
        })
            

        return colored_expected
    }

    useEffect(() => {
        if (results) {
            let { nodes, links }  = transformNodeLinks(results["ks_expected"])
            let real_ks  = transformNodeLinks(results["ks_real"])
            const coloredNodes = nodesDifferences(nodes, real_ks.nodes)
            const coloredLinks = linksDifferences(links, real_ks.links)

            setKsExpected({ nodes: coloredNodes, links: coloredLinks })
            setKsReal({ nodes: real_ks.nodes, links: real_ks.links})
        }
    }, [results])

    const config = {
        "automaticRearrangeAfterDropNode": false,
        "collapsible": false,
        "directed": true,
        "focusAnimationDuration": 0.75,
        "focusZoom": 1,
        "freezeAllDragEvents": false,
        "height": 700,
        "highlightDegree": 1,
        "highlightOpacity": 1,
        "linkHighlightBehavior": false,
        "maxZoom": 8,
        "minZoom": 0.1,
        "nodeHighlightBehavior": false,
        "staticGraph": false,
        "panAndZoom": true,
        "width": 400,
        "d3": {
          "alphaTarget": 0.05,
          "gravity": -100,
          "linkLength": 100,
          "linkStrength": 1,
          "disableLinkForce": false
        },
        "node": {
          "labelProperty": "id",
          "color": "#d3d3d3",
          "fontColor": "black",
          "fontSize": 8,
          "fontWeight": "normal",
          "highlightColor": "SAME",
          "highlightFontSize": 8,
          "highlightFontWeight": "normal",
          "highlightStrokeColor": "SAME",
          "highlightStrokeWidth": "SAME",
          "mouseCursor": "pointer",
          "opacity": 1,
          "renderLabel": true,
          "size": 200,
          "strokeColor": "none",
          "strokeWidth": 1.5,
        },
        "link": {
          "color": "#d3d3d3",
          "fontColor": "black",
          "fontSize": 8,
          "fontWeight": "normal",
          "highlightColor": "SAME",
          "highlightFontSize": 8,
          "highlightFontWeight": "normal",
          "labelProperty": "label",
          "mouseCursor": "pointer",
          "opacity": 1,
          "renderLabel": false,
          "semanticStrokeWidth": false,
          "strokeWidth": 1.5,
          "markerHeight": 6,
          "markerWidth": 6,
          "strokeDasharray": 0,
          "strokeDashoffset": 0,
          "strokeLinecap": "butt",
        }
      }
    

    return (
    <Container>
        <Row style={{margin: '10px', padding: '10px'}}>
            <h3>Levenshtein distance between graphs: {results?.distance}</h3>
        </Row>
         <Row style={{ padding: '10px'}}>
            <h4>Expected knowledge space</h4>
             <Col xs={6} style={{margin: '10px'}}>
                <div>
                    <D3Graph id="1" data={ksExpected} configProp={config} />
                </div>
             </Col>
             <Col style={{margin: '10px'}}>
             <h4>Real knowledge space</h4>
                <div>
                    <D3Graph id="2" data={ksReal} configProp={config} />
                </div>
            </Col>
        </Row>
     
     </Container>
        
    )
}

export default TestResults;