import { useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getTest } from '../../store/actions/TestActions';

const columns = [{
  dataField: 'itemId',
  text: 'Question'
}];


const MyExportCSV = (props) => {
  const handleClick = () => {
    props.onExport();
  };
  return (
    <div>
      <button className="btn btn-success" onClick={ handleClick }>Export to CSV</button>
    </div>
  );
};

const TestResults = ({}) => {

    const {id} = useParams();
    const test = useSelector(state => state.test.current)
    const columns = [{dataField: 'itemId', text: 'Question'}];
    const questions = [];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTest(id));

    }, [])

    useEffect(() => { 
        console.log(test);
        test?.parts.forEach(part => {
            part.sections.forEach(section => {
                section.items.forEach(question => {
                    questions.push({dataField:'', text: question.question})
                })

            })
        })
    }, [test])
    console.log(questions);

    return (
        <ToolkitProvider
        keyField="id"
        data={questions}
        columns={ columns }
        exportCSV
        >
        {
            props => (
            <div>
                <BootstrapTable { ...props.baseProps } />
                <hr />
                <MyExportCSV { ...props.csvProps } />
            </div>
            )
        }
        </ToolkitProvider>
    )
}

export default TestResults;