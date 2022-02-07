import { Graph } from "react-d3-graph";


export const D3Graph = ({ data, configProp, id}) => {
    return (
            <Graph
                id={`graph-id-${id}`}
                data={data}
                config={configProp}
            />
    )

 }



export default D3Graph;