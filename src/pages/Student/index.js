import React, { useState, useEffect } from 'react';

import RegisterButton from '../../components/RegisterButton';
import SearchField from '../../components/SearchField';
import ContentHeader from '../../components/ContentHeader';
import Pagination from '../../components/Pagination';

import api from '../../services/api';

import history from '../../services/history';

import {
    ListContainer,
    Table,
    EditButton,
    DeleteButton,
} from '../_layouts/default/styles';

export default function Student() {
    const [students, setStudents] = useState([]);
    const [page, setPage] = useState(1);
    const [hasNext, setHasNext] = useState(true);

    useEffect(() => {
        async function getStudents() {
            console.tron.log(page);
            const response = await api.get(`/students?page=${page}`);

            if (response.data.length > 0) {
                setStudents(response.data);
                setHasNext(response.data.length < 10);
            } else if (page > 1) {
                const value = page - 1;
                setPage(value);
            }
        }

        getStudents();
    }, [page]);

    function handleNextPage() {
        const value = page + 1;
        setPage(value);
    }

    function handlePreviousPage() {
        if (page > 1) {
            const value = page - 1;
            setPage(value);
        }
    }

    function handleEditStudent(student) {
        history.push('/students/edit', { student });
    }

    async function handleDeleteStudent(student) {
        await api.delete(`/students/${student.id}`);
        setPage(1);
    }

    return (
        <ListContainer>
            <ContentHeader>
                <h1>Gerenciamento alunos</h1>
                <div>
                    <RegisterButton to="/students/edit" />
                    <SearchField />
                </div>
            </ContentHeader>
            <Table>
                <thead>
                    <th colSpan="5">NOME</th>
                    <th colSpan="5">E_MAIL</th>
                    <th colSpan="2">IDADE</th>
                    <th colSpan="1"> </th>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key="1">
                            <td colSpan="5">
                                <p>{student.name}</p>
                            </td>
                            <td colSpan="5">{student.email}</td>
                            <td colSpan="2">{student.age}</td>
                            <td colSpan="1" align="right">
                                <EditButton
                                    onClick={() => handleEditStudent(student)}
                                >
                                    editar
                                </EditButton>
                                <DeleteButton
                                    onClick={() => handleDeleteStudent(student)}
                                >
                                    apagar
                                </DeleteButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination
                page={page}
                onPrevious={handlePreviousPage}
                onNext={handleNextPage}
                hasNext={hasNext}
            />
        </ListContainer>
    );
}
