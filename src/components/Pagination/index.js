import React from 'react';

import { PaginationContainer } from './styles';

export default function Pagination({ page, hasNext, onPrevious, onNext }) {
    return (
        <PaginationContainer>
            <button onClick={onPrevious} disabled={page <= 1} type="button">
                Anterior
            </button>
            <span>{page}</span>
            <button disabled={hasNext} type="button" onClick={onNext}>
                Próximo
            </button>
        </PaginationContainer>
    );
}
