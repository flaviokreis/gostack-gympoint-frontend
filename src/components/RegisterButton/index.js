import React from 'react';

import { MdAdd } from 'react-icons/md';

import { Button } from './styles';

export default function RegisterButton({ to }) {
    return (
        <Button to={to}>
            <MdAdd color="#fff" size={20} />
            Cadastrar
        </Button>
    );
}
