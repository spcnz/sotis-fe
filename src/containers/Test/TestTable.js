import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { getAllTest } from '../../store/actions/TestActions';

const TestTable = () => {
    const dispatch = useDispatch();
    const { id } = useParams()
    const tests = useSelector(state => state.test.all)

    useEffect(() => {
        dispatch(getAllTest(id))
    },[])


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
                    <tr>
                        <td>{test.id}</td>
                        <td>{test.title}</td>
                        <td><Button variant="success">START</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
      </Container>
    )
}


export default TestTable;