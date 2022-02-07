import { useDispatch, useSelector } from "react-redux";

import TreeItem from '@mui/lab/TreeItem';

import ItemTreeNode from "./ItemTreeNode";
import { setCurrentSection } from "../../../store/actions/SectionActions";

const SectionTreeNode = ({ partId, section, idx, items }) => {
    const dispatch = useDispatch();

    return (
        <TreeItem 
            nodeId={`${section.id}_section`} 
            label={`Section: ${++idx} ${section.title}`}
            onClick={() => dispatch(setCurrentSection(section))}
        >

        {items && items.map((item, item_idx) => (
            <ItemTreeNode
                sectionId={section.id}
                item={item}
                idx={item_idx}
                key={item_idx}
                options={item?.options}
            />
        ))}
        </TreeItem>
    )

}

export default SectionTreeNode;