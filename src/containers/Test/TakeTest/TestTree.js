import { useDispatch, useSelector } from "react-redux";

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import { getSections } from '../../../store/actions/SectionActions';
import { getItems } from '../../../store/actions/ItemActions';
import PartTreeNode from "./PartTreeNode";

const TestTree = ({ test }) => {
    const dispatch = useDispatch();


    const onPartClick = id => {
        console.log("getting sections for part id : ", id)
        dispatch(getSections(id))
    }

    const onSectionClick = id => {
        console.log("getting items for section id : ", id)
        dispatch(getItems(id))
    }

    const onItemClick = id => {
        console.log("getting options for item id : ", id)
    }


    console.log('Rerender of TEST', test)
    return (
        <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
        >
            <TreeItem  nodeId={test.id} label={`Test: ${test.title}`}>
                {test.parts.map((part, idx) => (
                    <PartTreeNode
                        testId={test.id}
                        part={part}
                        idx={idx}
                        key={idx}
                    />
                ))}
            </TreeItem>
        </TreeView>
    )
}

export default TestTree;