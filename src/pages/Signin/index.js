import React from 'react';

import { Wrapper, Content } from './styles';

import logo from '../../assets/logo_login.svg';

export default function Signin() {
    return (
        <Wrapper>
            <Content>
                <img src={logo} alt="Gympoint" />
                <form>
                    <strong>SEU E-MAIL</strong>
                    <input
                        name="email"
                        type="email"
                        placeholder="exemplo@email.com"
                    />

                    <strong>SUA SENHA</strong>
                    <input
                        name="password"
                        type="password"
                        placeholder="********"
                    />

                    <button type="submit">Entrar no sistema</button>
                </form>
            </Content>
        </Wrapper>
    );
}
