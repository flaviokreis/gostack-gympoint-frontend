import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    background-color: #f5f5f5;
`;

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px calc(10%);
`;

export const EditContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px calc(25%);
`;

export const Card = styled.div`
    width: 100%;

    padding: 30px;
    background: #fff;
    border-radius: 4px;
`;

export const Table = styled.table`
    width: 100%;

    padding: 30px;
    background: #fff;
    border-radius: 4px;

    thead th {
        color: #444;
        font-size: 16px;
        padding: 16px 0;
        text-align: left;
    }

    tbody td {
        color: #666;
        font-size: 16px;
        padding: 16px 0;
        border-bottom: 1px solid #eee;
    }

    button {
        background: none;
        border: 0;
        padding-left: 8px;
    }
`;

export const EditButton = styled.button`
    color: #4d85ee;
`;

export const DeleteButton = styled.button`
    color: #de3b3b;
`;
