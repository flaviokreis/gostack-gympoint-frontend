import React from 'react';

import { MdSearch } from 'react-icons/md';

import { SearchContainer, BoxIcon } from './styles';

export default function SearchField() {
    return (
        <SearchContainer>
            <BoxIcon>
                <MdSearch color="#999" size={20} />
            </BoxIcon>
            <input name="search" type="text" placeholder="Buscar aluno" />
        </SearchContainer>
    );
}
