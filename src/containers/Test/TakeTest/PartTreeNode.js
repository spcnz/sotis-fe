import { useDispatch, useSelector } from "react-redux";

import TreeItem from '@mui/lab/TreeItem';

import { getSections } from '../../../store/actions/SectionActions';
import SectionTreeNode from "./SectionTreeNode";

const PartTreeNode = ({ testId, part, idx }) => {
    const dispatch = useDispatch()
    const sections = useSelector(state => state.section.all[part.id])

    const onPartClick = id => {
        dispatch(getSections(id));
    }

    console.log('Rerender of PART', part.title)
    return (
        <TreeItem 
            key={testId+ "_" + part.id} 
            nodeId={part.id} 
            label={`Part: ${++idx} ${part.title}`}
            onClick={() => onPartClick(part.id)} 
      > {sections && sections.map((section, sec_idx) => (
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