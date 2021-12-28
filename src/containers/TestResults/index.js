import { dispatch } from "d3-dispatch";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import D3Graph from "../Graph/D3Graph";
import { generateResults } from "../../store/actions/TestActions";

const TestResults = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const [data, setData] = useState({
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
        dispatch(generateResults(id))
    },[dispatch])

    useEffect(() => {

        if (results) {
            const nodes = results.map(result => ({ id: generateId(result)}))
            console.log('Nodes:  ', nodes)

            let links = []
            results.forEach(result => {
                if (result.target_problems.length > 0) {
                    result.target_problems.forEach(node => {
                        let target = node.problem.length == 1 ? node.problem[0].id : ""
                        if (target === "")
                            target = generateId(node);

                        links.push({ 
                            source: generateId(result),
                            target
                            }
                        )
                    })
             }})
             console.log('Links:  ', links)
            setData({
                nodes,
                links
            })
        }
    }, [results])

    const onClickNode = nodeId => {
        console.log('id je ', nodeId)
    }

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
        "width": 1000,
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
          "svg": "",
          "symbolType": "circle"
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
        <div>
            <D3Graph data={data} configProp={config}  onClickNode={onClickNode}/>
        </div>
    )
}

export default TestResults;