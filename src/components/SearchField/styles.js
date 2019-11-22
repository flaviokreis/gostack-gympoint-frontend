import styled from 'styled-components';

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    svg {
        height: 30px;
        padding-left: 4px;
        background: #fff;
    }
    input {
        color: #444;
        height: 32px;
        width: 200px;
        font-size: 14px;
        border: 1px solid #ddd;
        border-left: 0;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        padding-left: 4px;

        &::placeholder {
            color: #999;
        }
    }
`;

export const BoxIcon = styled.div`
    font-size: 12px;
    margin-left: 16px;
    border: 1px solid #ddd;
    border-right: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 0px 5px;
    background: #fff;
`;
