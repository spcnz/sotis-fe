import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import PartTreeNode from "./PartTreeNode";

const TestTree = ({ test }) => {

    return (
        <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
        >
            <TreeItem  
                nodeId={test.id} 
                label={`Test: ${test.title}`}
                >
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