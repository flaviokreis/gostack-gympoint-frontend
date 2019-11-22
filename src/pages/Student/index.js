import React from 'react';

import RegisterButton from '../../components/RegisterButton';
import SearchField from '../../components/SearchField';
import ContentHeader from '../../components/ContentHeader';

import { Container, StudentTable, EditButton, DeleteButton } from './styles';

export default function Student() {
    return (
        <Container>
            <ContentHeader>
                <h1>Gerenciamento alunos</h1>
                <div>
                    <RegisterButton to="/students/create" />
                    <SearchField />
                </div>
            </ContentHeader>
            <StudentTable>
                <thead>
                    <th colSpan="5">NOME</th>
                    <th colSpan="5">E_MAIL</th>
                    <th colSpan="2">IDADE</th>
                    <th colSpan="1"> </th>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="5">
                            <p>Flávio Kreis</p>
                        </td>
                        <td colSpan="5">flaviokreis@gmail.com</td>
                        <td colSpan="2">34</td>
                        <td colSpan="1" align="right">
                            <EditButton>editar</EditButton>
                            <DeleteButton>apagar</DeleteButton>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="5">
                            <p>Flávio Kreis</p>
                        </td>
                        <td colSpan="5">flaviokreis@gmail.com</td>
                        <td colSpan="2">34</td>
                        <td colSpan="1" align="right">
                            <EditButton>editar</EditButton>
                            <DeleteButton>apagar</DeleteButton>
                        </td>
                    </tr>
                </tbody>
            </StudentTable>
        </Container>
    );
}
