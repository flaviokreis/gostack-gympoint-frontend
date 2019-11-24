import React, { useState, useMemo } from 'react';
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

export default function EditPlan(props) {
    const [plan, setPlan] = useState(props.location.state.plan);
    const [price, setPrice] = useState(props.location.state.plan.price || 0);
    const [duration, setDuration] = useState(
        props.location.state.plan.duration || 0
    );

    const totalPrice = useMemo(() => formatPrice(price * duration), [
        price,
        duration,
    ]);

    async function handleSubmit({ title, duration, price }) {
        await api
            .put(`/plans/${plan.id}`, {
                title,
                duration,
                price,
            })
            .then(() => {
                toast.success('Plano atualizado com sucesso!', {
                    onClose: () => history.push('/plans'),
                });
            })
            .catch(err => {
                toast.error(err.error || 'Erro ao atualizar!');
            });
    }

    function handleBackButton() {
        history.goBack();
    }

    return (
        <EditContainer>
            <Form initialData={plan} schema={schema} onSubmit={handleSubmit}>
                <ContentHeader>
                    <h1>Edição de plno</h1>
                    <div>
                        <BackButton onClick={() => handleBackButton}>
                            <MdChevronLeft color="#fff" size={20} />
                            Voltar
                        </BackButton>
                        <SaveButton type="submit">
                            <MdCheck color="#fff" size={20} />
                            Editar
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
