import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { getAllTest } from '../../store/actions/TestActions';
import { CREATE_TEST, TEST, RESULTS } from '../../routes';
import { STUDENT, TEACHER } from "../../consts";

const TestTable = () => {
    const dispatch = useDispatch();
    const { id } = useParams()
    const tests = useSelector(state => state.test.all)
    const role = useSelector(state => state.authUser.role)
    const history = useHistory();

    useEffect(() => {
        dispatch(getAllTest(id))
    },[dispatch, id])

    const routeChange = test =>{ 
        let path = TEST.replace(":id", test.id);
        path = path.replace(":courseId", id);
        history.push(path);
      }


    const renderTeacherButtons = testId => (
        <div>
            <Button variant="info" style={{marginRight:12}} onClick={() => history.push(TEST.replace(':id', testId).replace(':courseId', id))}>VIEW</Button>
            <Button variant="warning" style={{marginRight:12}} onClick={() => history.push(RESULTS.replace(':id', testId).replace(':courseId', id))}>RESULTS</Button>
        </div>
    )
    
    return (
        <Container style={{margin: '40px', width: '50%'}}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>{role === STUDENT ? 'Take test' : 'Action' && <Button variant="success" onClick={() => history.push(CREATE_TEST.replace(':id', id))}>ADD NEW TEST</Button>}</th>
                    </tr>
                </thead>
            <tbody>
                {tests.map(test => (
                    <tr key={test.id}>
                        <td>{test.id}</td>
                        <td>{test.title}</td>
                        <td>
                            {role === TEACHER && renderTeacherButtons(test.id)}
                            {role === STUDENT && <Button variant="success" onClick={() => routeChange(test)}>START</Button>}
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
      </Container>
    )
}


export default TestTable;