import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { MdCheck, MdChevronLeft } from 'react-icons/md';

import ContentHeader from '../../components/ContentHeader';

import api from '../../services/api';

import history from '../../services/history';

import { EditContainer, Card, BackButton, SaveButton } from './styles';

const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório'),
    age: Yup.number()
        .typeError('Idade é obrigatório')
        .required('Idade é obrigatório'),
    weight: Yup.number()
        .typeError('Peso é obrigatório')
        .required('Peso é obrigatório'),
    height: Yup.number()
        .typeError('Altura é obrigatório')
        .required('Altura é obrigatório'),
});

export default function CreateStudent() {
    function handleBackButton() {
        history.goBack();
    }

    async function handleSubmit({ name, email, age, weight, height }) {
        const params = {
            name,
            email,
            age,
            weight,
            height,
        };

        await api
            .post('/students', params)
            .then(() => {
                toast.success('Estudante adicionado com sucesso!', {
                    onClose: () => history.push('/students'),
                });
            })
            .catch(err => {
                toast.error(err.error || 'Erro ao tentar salvar o estudante!');
            });
    }

    return (
        <EditContainer>
            <Form schema={schema} onSubmit={handleSubmit}>
                <ContentHeader>
                    <h1>Cadastro de aluno</h1>
                    <div>
                        <BackButton onClick={() => handleBackButton()}>
                            <MdChevronLeft color="#fff" size={20} />
                            Voltar
                        </BackButton>
                        <SaveButton type="submit">
                            <MdCheck color="#fff" size={20} />
                            Cadastrar
                        </SaveButton>
                    </div>
                </ContentHeader>
                <Card>
                    <div>
                        <p>
                            <strong>nome completo</strong>
                            <Input
                                name="name"
                                type="text"
                                autocomplete="off"
                                placeholder="John Doe"
                            />
                        </p>
                        <p>
                            <strong>endereço de e-mail</strong>
                            <Input
                                name="email"
                                type="email"
                                autocomplete="off"
                                placeholder="exemplo@email.com"
                            />
                        </p>
                        <div>
                            <p>
                                <strong>idade</strong>
                                <Input
                                    name="age"
                                    type="number"
                                    placeholder="30"
                                />
                            </p>

                            <p>
                                <strong>peso</strong>
                                <Input name="weight" placeholder="60.0" />
                            </p>

                            <p>
                                <strong>altura</strong>
                                <Input name="height" placeholder="1.75" />
                            </p>
                        </div>
                    </div>
                </Card>
            </Form>
        </EditContainer>
    );
}
