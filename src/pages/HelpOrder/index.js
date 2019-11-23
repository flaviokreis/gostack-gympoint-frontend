import React, { useState, useEffect } from 'react';

import ContentHeader from '../../components/ContentHeader';
import Pagination from '../../components/Pagination';

import api from '../../services/api';

import history from '../../services/history';

import { ListContainer, Table, EditButton } from '../_layouts/default/styles';

export default function HelpOrderList() {
    const [helpOrders, setHelpOrders] = useState([]);
    const [page, setPage] = useState(1);
    const [hasNext, setHasNext] = useState(true);

    useEffect(() => {
        async function getHelpOrders() {
            console.tron.log(page);
            const response = await api.get(`/help_orders?page=${page}`);

            if (response.data.length > 0) {
                setHelpOrders(response.data);
                setHasNext(response.data.length < 10);
            } else if (page > 1) {
                const value = page - 1;
                setPage(value);
            }
        }

        getHelpOrders();
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

    function handleEdit(helpOrder) {
        history.push('/help_orders/edit', { helpOrder });
    }

    return (
        <ListContainer>
            <ContentHeader>
                <h1>Pedidos de auxílio</h1>
            </ContentHeader>
            <Table>
                <thead>
                    <th>ALUNO</th>
                    <th />
                </thead>
                <tbody>
                    {helpOrders.map(helpOrder => (
                        <tr key="1">
                            <td>{helpOrder.student.name}</td>
                            <td align="right">
                                <EditButton
                                    onClick={() => handleEdit(helpOrder)}
                                >
                                    responder
                                </EditButton>
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
