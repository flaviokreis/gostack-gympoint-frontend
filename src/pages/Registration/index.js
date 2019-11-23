import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdCheckCircle } from 'react-icons/md';
import { formatPrice } from '../../util/format';

import RegisterButton from '../../components/RegisterButton';
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

export default function RegistrationList() {
    const [registrations, setRegistrations] = useState([]);
    const [page, setPage] = useState(1);
    const [hasNext, setHasNext] = useState(true);

    useEffect(() => {
        async function getRegistrations() {
            console.tron.log(page);
            const response = await api.get(`/registrations?page=${page}`);

            if (response.data.length > 0) {
                const data = response.data.map(registration => ({
                    ...registration,
                    start_date_formated: format(
                        parseISO(registration.start_date),
                        "d 'de' MMMM 'de' yyyy",
                        { locale: pt }
                    ),
                    end_date_formated: format(
                        parseISO(registration.end_date),
                        "d 'de' MMMM 'de' yyyy",
                        { locale: pt }
                    ),
                }));

                setRegistrations(data);
                setHasNext(response.data.length < 10);
            } else if (page > 1) {
                const value = page - 1;
                setPage(value);
            }
        }

        getRegistrations();
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

    function handleEdit(registration) {
        history.push('/registrations/edit', { registration });
    }

    async function handleDelete(registration) {
        await api.delete(`/registrations/${registration.id}`);
        setPage(1);
    }

    return (
        <ListContainer>
            <ContentHeader>
                <h1>Gerenciamento matrículas</h1>
                <RegisterButton to="/registrations/edit" />
            </ContentHeader>
            <Table>
                <thead>
                    <th>ALUNO</th>
                    <th>PLANO</th>
                    <th>INÍCIO</th>
                    <th>TÉRMINO</th>
                    <th>ATIVA</th>
                    <th />
                </thead>
                <tbody>
                    {registrations.map(registration => (
                        <tr key="1">
                            <td>{registration.student.name}</td>
                            <td>{registration.plan.title}</td>
                            <td>{registration.start_date_formated}</td>
                            <td>{registration.end_date_formated}</td>
                            <td>
                                {registration.active ? (
                                    <MdCheckCircle size={20} color="#41CB59" />
                                ) : (
                                    <MdCheckCircle size={20} color="#999" />
                                )}
                            </td>
                            <td align="right">
                                <EditButton
                                    onClick={() => handleEdit(registration)}
                                >
                                    editar
                                </EditButton>
                                <DeleteButton
                                    onClick={() => handleDelete(registration)}
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
