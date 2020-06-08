import React, { useState, useEffect } from 'react';
import { FaSpinner, FaArrowLeft } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '../../services/api';
import history from '../../services/history';

import Container from '../../components/Container';

import { Title, SubmitButton, Button } from './styles';

const schema = Yup.object().shape({
    number: Yup.string().required('O número do processo é obrigatório.'),
    generic_title: Yup.string().required('O título é obrigatório.'),
    details: Yup.string(),
    date: Yup.string().min(10, 'Use o formato: 2020-09-12'),
    hours: Yup.string().min(5, 'Use o formato: 12:30'),
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

            const response = await api.get(`/show/process/${number}`);

            const id_process = response.data;

            await api.post(
                '/create/process',
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
                <Input name="date" type="text" placeholder="Data: 2020-07-10" />
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
