import React, { useState, useEffect } from 'react';

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

export default function PlanList() {
    const [plans, setPlans] = useState([]);
    const [page, setPage] = useState(1);
    const [hasNext, setHasNext] = useState(true);

    useEffect(() => {
        async function getPlans() {
            console.tron.log(page);
            const response = await api.get(`/plans?page=${page}`);

            if (response.data.length > 0) {
                const data = response.data.map(plan => ({
                    ...plan,
                    priceFormatted: formatPrice(plan.price),
                }));

                setPlans(data);
                setHasNext(response.data.length < 10);
            } else if (page > 1) {
                const value = page - 1;
                setPage(value);
            }
        }

        getPlans();
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

    function handleEdit(plan) {
        history.push('/plans/edit', { plan });
    }

    async function handleDelete(plan) {
        await api.delete(`/plans/${plan.id}`);
        setPage(1);
    }

    return (
        <ListContainer>
            <ContentHeader>
                <h1>Gerenciamento planos</h1>
                <RegisterButton to="/plans/create" />
            </ContentHeader>
            <Table>
                <thead>
                    <th colSpan="7">TÍTULO</th>
                    <th>DURAÇÃO</th>
                    <th>VALOR p/ MÊS</th>
                    <th> </th>
                </thead>
                <tbody>
                    {plans.map(plan => (
                        <tr key="1">
                            <td colSpan="7">
                                <p>{plan.title}</p>
                            </td>
                            <td>{plan.duration}</td>
                            <td>{plan.priceFormatted}</td>
                            <td align="right">
                                <EditButton onClick={() => handleEdit(plan)}>
                                    editar
                                </EditButton>
                                <DeleteButton
                                    onClick={() => handleDelete(plan)}
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
