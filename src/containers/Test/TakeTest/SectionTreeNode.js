import { useDispatch, useSelector } from "react-redux";

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import { getSections } from '../../../store/actions/SectionActions';
import { getItems } from '../../../store/actions/ItemActions';
import { useEffect } from "react";

const SectionTreeNode = ({ partId, section, idx }) => {

    // useEffect(() => {
    //     dispatch
    // }, [])
    console.log('Rerender of SECTION', section)
    return (
        <TreeItem 
            key={partId + "_" + section.id} 
            nodeId={section.id} 
            label={`Section: ${++idx} ${section.title}`}
        />
    )

}

export default SectionTreeNode;