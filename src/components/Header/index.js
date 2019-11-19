import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo_header.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="GoBarber" />
                    <Link to="/studends">ALUNOS</Link>
                    <Link to="/plans">PLANOS</Link>
                    <Link to="/registrations">MATRÍCULAS</Link>
                    <Link to="/help-orders">PEDIDO DE AUXÍLIO</Link>
                </nav>

                <aside>
                    <Profile>
                        <strong>Flávio Kreis</strong>
                        <button type="button">sair do sistema</button>
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
