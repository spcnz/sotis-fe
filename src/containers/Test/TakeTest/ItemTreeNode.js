import { useDispatch, useSelector } from "react-redux";

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import { getSections } from '../../../store/actions/SectionActions';
import { getItems } from '../../../store/actions/ItemActions';
import { useEffect } from "react";
import SectionTreeNode from "./SectionTreeNode";

const ItemTreeNode = ({ sectionId, item, idx }) => {
    const dispatch = useDispatch()
    const sections = useSelector(state => state.section.all)

    const onItemClick = id => {
        //dispatch(getSections(id))
    }
    // useEffect(() => {
    //     dispatch
    // }, [])
    console.log('Rerender of ITEM', item)

    return (
        <TreeItem 
            key={sectionId+ "_" + item.id} 
            nodeId={item.id} 
            label={`Question: ${++idx} `}
            onClick={() => onItemClick(item.id)}
        > 
        </TreeItem>
    )

}

export default ItemTreeNode;