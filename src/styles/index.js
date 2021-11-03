import styled from 'styled-components';


export const Container = styled.div`
    background-color: rgba(255,255, 255, 1);
    position:absolute;
    padding: 30px;
    height: 50%;
    width: 50%;
    margin: 10% 20%;
    transition:.3s ease-in-out;
    z-index:0;
    box-shadow: 0 0 15px 9px #00000096;
`;


export const TestContainer = styled.div`
    background-color: rgba(255,255, 255, 1);
    position:absolute;
    padding: 30px;
    height: 500px;
    width: 60%;
    margin: 5% 20%;
    margin-bottom: 10%;
    transition:.3s ease-in-out;
    z-index:0;
    box-shadow: 0 0 15px 9px #00000096;
`;

export const Table = styled.table`
    overfloww: auto;
    width: 100%;
    cellspacing:0
`;

export const TableHead = styled.thead`
    width: 100%;
`;

export const TableBody = styled.tbody`
    width: 100%;
    display: block;
    overflow: auto;
    height: 100px;
`;

export const TableRow = styled.tbody`
    width: 100%;
`;