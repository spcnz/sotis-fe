import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { getAllTest, setCurrentTest } from '../../store/actions/TestActions';
import { TEST } from '../../routes';

const TestTable = () => {
    const dispatch = useDispatch();
    const { id } = useParams()
    const tests = useSelector(state => state.test.all)
    const history = useHistory();

    useEffect(() => {
        dispatch(getAllTest(id))
    },[])

    const routeChange = test =>{ 
        let path = TEST.replace(":id", test.id);
        path = path.replace("courseId", id);
        history.push(path);
      }

    return (
        <Container style={{margin: '40px', width: '50%'}}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Take test</th>
                    </tr>
                </thead>
            <tbody>
                {tests.map(test => (
                    <tr key={test.id}>
                        <td>{test.id}</td>
                        <td>{test.title}</td>
                        <td><Button variant="success" onClick={() => routeChange(test)}>START</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
      </Container>
    )
}


export default TestTable;