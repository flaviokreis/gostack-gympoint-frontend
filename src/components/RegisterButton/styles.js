import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
    display: flex;
    align-items: center;
    height: 32px;
    padding: 10px;
    font-weight: bold;
    text-transform: uppercase;
    background: #ee4d64;
    color: #fff;
    border-radius: 4px;

    > svg {
        margin-right: 4px;
    }
`;
