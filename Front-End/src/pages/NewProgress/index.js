import React, { useState, useEffect } from 'react';
import { FaSpinner, FaArrowLeft } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '../../services/api';
import history from '../../services/history';

import Container from '../../components/Container';

import { Title, SubmitButton, Button } from './styles';

const schema = Yup.object().shape({
    number: Yup.string()
        .min(20, 'O processo precisa ter 20 dígitos.')
        .required('O número do processo é obrigatório.'),
    generic_title: Yup.string().required('O título é obrigatório.'),
    details: Yup.string(),
    date: Yup.string(),
    hours: Yup.string(),
});

export default function NewProgress() {
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState('');

    useEffect(() => {
        const getToken = localStorage.getItem('token');

        if (getToken) {
            setToken(JSON.parse(getToken));
        }
    }, []);

    async function handleSubmit({
        number,
        generic_title,
        details,
        date,
        hours,
    }) {
        try {
            setLoading(true);

            const response = await api.get(`/show/process/${number}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const id_process = response.data;

            await api.post(
                '/create/progress',
                {
                    id_process,
                    generic_title,
                    details,
                    date,
                    hours,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            alert('Processo criado com sucesso!');

            setLoading(false);
            history.push('/dashboard');
        } catch (err) {
            setLoading(false);
            alert('Algo deu errado tente novamente!');
        }
    }

    return (
        <Container>
            <Title>Novo Progresso</Title>
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input
                    name="number"
                    type="text"
                    placeholder="nº: 00000000000000000000"
                />
                <Input
                    name="generic_title"
                    type="text"
                    placeholder="Título: Assistência Judiciária Gratuita não..."
                />
                <Input
                    name="details"
                    type="text"
                    placeholder="Detalhes: HOTEIS E TURISMO LTDA - CNPJ: 0...."
                />
                <Input name="date" type="text" placeholder="Data: 10/07/2020" />
                <Input name="hours" type="text" placeholder="Horário: 15:30" />

                <SubmitButton loading={loading}>
                    {loading ? (
                        <FaSpinner color="#fff" size={14} />
                    ) : (
                        <strong>Cadastrar</strong>
                    )}
                </SubmitButton>
                <Button onClick={() => history.push('/dashboard')}>
                    <FaArrowLeft size={20} color="#000000" />
                    <strong>Dashboard</strong>
                </Button>
            </Form>
        </Container>
    );
}
