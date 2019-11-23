import styled from 'styled-components';

export const PaginationContainer = styled.div`
    display: flex;
    align-self: center;

    margin-top: 16px;

    button {
        border: 0;
        background: none;
        color: #ee4d64;

        &:disabled {
            color: #bbb;
        }
    }

    span {
        padding: 0 16px;
    }
`;
