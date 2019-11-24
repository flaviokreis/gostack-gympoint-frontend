import styled from 'styled-components';

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

    div {
        display: flex;
        flex-direction: column;

        p span {
            color: #ee4d64;
        }

        p strong {
            width: 100%;
            font-size: 14px;
            color: #444;
            text-transform: uppercase;
        }

        p input {
            width: 100%;
            height: 45px;
            padding: 0 15px;
            border-radius: 4px;
            border: solid 1px #dddddd;
            font-size: 14px;
            color: #444;
            margin-top: 5px;
            margin-bottom: 8px;
            background-color: #ffffff;

            &::placeholder {
                color: #999;
            }

            &:disabled {
                background-color: #f5f5f5;
                pointer-events: none;
            }
        }

        div {
            display: flex;
            flex-direction: row;
            align-content: space-between;

            p {
                margin-right: 16px;
            }

            p:last-child {
                margin-right: 0;
            }
        }
    }
`;

export const BackButton = styled.button`
    display: flex;
    align-items: center;
    height: 35px;
    padding: 0 10px;
    margin-right: 16px;
    font-weight: bold;
    text-transform: uppercase;
    background: #cccccc;
    color: #fff;
    border: 0;
    border-radius: 4px;

    > svg {
        margin-right: 4px;
    }
`;

export const SaveButton = styled.button`
    display: flex;
    align-items: center;
    height: 35px;
    padding: 0 10px;
    font-weight: bold;
    text-transform: uppercase;
    background: #ee4d64;
    color: #fff;
    border: 0;
    border-radius: 4px;

    > svg {
        margin-right: 4px;
    }
`;
