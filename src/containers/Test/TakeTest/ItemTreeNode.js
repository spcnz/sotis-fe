import { useDispatch, useSelector } from "react-redux";

import TreeItem from '@mui/lab/TreeItem';

import { setItem } from '../../../store/actions/ItemActions';



const ItemTreeNode = ({ sectionId, item, idx }) => {
    const dispatch = useDispatch();
    console.log('Rerender of ITEM', item)

    const onItemClick = item => {
        dispatch(setItem(item));
    }
    return (
        <TreeItem 
            key={sectionId+ "_" + item.id} 
            nodeId={item.id} 
            label={`Question: ${++idx} `}
            onClick={() => onItemClick(item)}
        > 
        </TreeItem>
    )

}

export default ItemTreeNode;
