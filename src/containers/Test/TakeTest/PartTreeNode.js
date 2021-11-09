import { useDispatch, useSelector } from "react-redux";

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import { getSections } from '../../../store/actions/SectionActions';
import { getItems } from '../../../store/actions/ItemActions';
import { useEffect } from "react";
import SectionTreeNode from "./SectionTreeNode";

const PartTreeNode = ({ testId, part, idx }) => {
    const dispatch = useDispatch()
    const sections = useSelector(state => state.section.all)

    const onPartClick = id => {
        console.log("getting sections for part id : ", id)
        dispatch(getSections(id))
    }
    // useEffect(() => {
    //     dispatch
    // }, [])
    console.log('Rerender of PART', part)
    return (
        <TreeItem 
            key={testId+ "_" + part.id} 
            nodeId={part.id} 
            label={`Part: ${++idx} ${part.title}`}
            onClick={() => onPartClick(part.id)}
        > {sections.map((section, sec_idx) => (
            <SectionTreeNode
                partId={part.id}
                section={section}
                idx={sec_idx}
                key={sec_idx}
            />
        ))}
        </TreeItem>
    )

}

export default PartTreeNode;