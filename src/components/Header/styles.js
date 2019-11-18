import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    padding: 0 30px;
`;

export const Content = styled.div`
    height: 64px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        align-items: center;

        img {
            margin-right: 20px;
            padding-right: 20px;
            border-right: 1px solid #ddd;
        }

        a {
            font-size: 15px;
            font-weight: bold;
            color: ${props => (props.selected ? '#444' : '#999')};
            margin-left: 16px;
        }
    }

    aside {
        display: flex;
        align-items: center;
    }
`;

export const Profile = styled.div`
    text-align: right;
    margin-right: 10px;

    strong {
        display: block;
        font-size: 14px;
        font-weight: bold;
        color: #666;
    }

    button {
        display: block;
        background: none;
        border: none;
        font-size: 12px;
        color: #de3b3b;
    }
`;
