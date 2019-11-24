import React, { useMemo, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { MdCheck, MdChevronLeft } from 'react-icons/md';

import ContentHeader from '../../components/ContentHeader';

import api from '../../services/api';

import history from '../../services/history';

import { formatPrice } from '../../util/format';

import { EditContainer, Card, BackButton, SaveButton } from './styles';

const schema = Yup.object().shape({
    title: Yup.string().required('Título é obrigatório'),
    duration: Yup.number()
        .typeError('Duração é obrigatório')
        .required('Duração é obrigatório'),
    price: Yup.number()
        .typeError('Preço é obrigatório')
        .required('Preço é obrigatório'),
});

export default function CreatePlan() {
    const [price, setPrice] = useState(0);
    const [duration, setDuration] = useState(0);

    const totalPrice = useMemo(() => formatPrice(price * duration), [
        price,
        duration,
    ]);

    function handleBackButton() {
        history.goBack();
    }

    async function handleSubmit({ title, duration, price }) {
        const params = {
            title,
            duration,
            price,
        };

        await api
            .post('/plans', params)
            .then(() => {
                toast.success('Plano adicionado com sucesso!', {
                    onClose: () => history.push('/plans'),
                });
            })
            .catch(err => {
                toast.error(err.error || 'Erro ao tentar salvar o plano!');
            });
    }

    return (
        <EditContainer>
            <Form schema={schema} onSubmit={handleSubmit}>
                <ContentHeader>
                    <h1>Cadastro de plano</h1>
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
                            <strong>título do plano</strong>
                            <Input
                                name="title"
                                type="text"
                                autocomplete="off"
                                placeholder="Plano anual"
                            />
                        </p>
                        <div>
                            <p>
                                <strong>duração (em meses)</strong>
                                <Input
                                    name="duration"
                                    type="number"
                                    placeholder="12"
                                    onChange={e => setDuration(e.target.value)}
                                />
                            </p>

                            <p>
                                <strong>preço mensal</strong>
                                <Input
                                    name="price"
                                    placeholder="R$ 79.90"
                                    onChange={e => setPrice(e.target.value)}
                                />
                            </p>

                            <p>
                                <strong>preço total</strong>
                                <Input
                                    disabled
                                    name="total"
                                    value={totalPrice}
                                />
                            </p>
                        </div>
                    </div>
                </Card>
            </Form>
        </EditContainer>
    );
}
