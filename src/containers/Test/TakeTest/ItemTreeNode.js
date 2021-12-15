import { useDispatch } from "react-redux";

import TreeItem from '@mui/lab/TreeItem';
import { setItem } from '../../../store/actions/ItemActions';

const ItemTreeNode = ({ sectionId, item, idx, options }) => {
    const dispatch = useDispatch();

    const onItemClick = item => {
        dispatch(setItem(item));
    }
    return (
        <TreeItem 
            key={sectionId+ "_" + item.id} 
            nodeId={item.id + ""} 
            label={`Question: ${++idx} `}
            onClick={() => onItemClick(item)}
        > 
        </TreeItem>
    )
}

export default ItemTreeNode;
