import TreeItem from '@mui/lab/TreeItem';
import SectionTreeNode from "./SectionTreeNode";

const PartTreeNode = ({ testId, part, idx, sections}) => {
  
    return (
        <TreeItem 
            key={testId+ "_" + part.id} 
            nodeId={part.id + ""} 
            label={`Part: ${++idx} ${part.title}`}
          
      > {sections && sections.map((section, sec_idx) => (
            <SectionTreeNode
                partId={part.id}
                section={section}
                idx={sec_idx}
                key={sec_idx}
                items={section?.items}
            />
        ))}  
        </TreeItem>
    )
}

export default PartTreeNode;