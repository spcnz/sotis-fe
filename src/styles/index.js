import styled from 'styled-components';

export const Container = styled.div`
    background-color: rgba(255,255, 255, 1);
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
    height: 600px;
    width: 60%;
    margin: 0 20%;
    margin-bottom: 10%;
    transition:.3s ease-in-out;
    z-index:0;
    box-shadow: 0 0 15px 9px #00000096;
`;

export const TableHead = styled.thead`
    background-color: red;
`;

export const TableBody = styled.tbody`
    width: 100%;
    height: 100px;
`;