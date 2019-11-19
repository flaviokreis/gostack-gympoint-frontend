import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    background: #ee4d64;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 360px;
    background: #fff;
    padding: 50px 30px;
    border-radius: 4px;
    border: 1px solid #eee;

    img {
        display: flex;
        justify-content: column;
        justify-content: center;
        align-items: center;
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        strong {
            color: #444;
            margin: 4px;
            font-size: 14px;
        }

        input {
            border: 1px solid #ddd;
            border-radius: 4px;
            height: 45px;
            color: #555;
            padding: 0 15px;
            font-size: 16px;

            margin: 3px 0 16px 0;

            &::placeholder {
                color: rgba(0, 0, 0, 0.3);
            }
        }

        span {
            color: #ee4d64;
            align-self: flex-start;
            margin: 0 0 16px;
            font-weight: bold;
        }

        button {
            margin: 5px 0 0;
            height: 45px;
            background: #ee4d64;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, '#ee4d64')};
            }
        }
    }
`;
