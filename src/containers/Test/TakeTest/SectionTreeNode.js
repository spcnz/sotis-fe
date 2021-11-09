import { useDispatch, useSelector } from "react-redux";

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import { getSections } from '../../../store/actions/SectionActions';
import { getItems } from '../../../store/actions/ItemActions';
import { useEffect } from "react";
import ItemTreeNode from "./ItemTreeNode";

const SectionTreeNode = ({ partId, section, idx }) => {
    const items = useSelector(state => state.item.all)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItems(section.id))
    }, [])

    const onSectionClick = sectionId => {
        dispatch(getItems(sectionId));
    }

    console.log('Rerender of SECTION', section)
    return (
        <TreeItem 
            key={partId + "_" + section.id} 
            nodeId={section.id} 
            label={`Section: ${++idx} ${section.title}`}
            onClick={() => onSectionClick(section.id)}
        >

        {items.map((item, item_idx) => (
            <ItemTreeNode
                sectionId={section.id}
                item={item}
                idx={item_idx}
                key={item_idx}
            />
        ))}
        </TreeItem>
    )

}

export default SectionTreeNode;