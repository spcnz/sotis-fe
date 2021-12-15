import { dispatch } from "d3-dispatch";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { generateResults } from "../../store/actions/TestActions";

const TestResults = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const [data, setData] = useState({
        nodes: [],
        links: []
    })

    const results = useSelector(state => state.test.results)

    useEffect(() => {
        dispatch(generateResults(id))
    },[dispatch])

    useEffect(() => {
        console.log(results, 'promenjen')
        let nodes = []
        for(let i = 0; i < 37; i++)
            nodes.push({ id: i })

        console.log(nodes)
        if (results)
            setData({
                nodes,
                links : results?.map(result => ({ source: result[0], target: result[1]}))
            })
    }, [results])

    const config = {
        "automaticRearrangeAfterDropNode": false,
        "collapsible": false,
        "directed": true,
        "focusAnimationDuration": 0.75,
        "focusZoom": 1,
        "freezeAllDragEvents": false,
        "height": 400,
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
            {/* <D3Graph data={data} configProp={config}/> */}
            {results?.map(result => (
                <div>
                    ({result[0]}, {result[1]})
                </div>
            ))}
        </div>
    )
}

export default TestResults;