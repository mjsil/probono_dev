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
    cpf: Yup.string()
        .min(14, 'Use o formato: 000.000.000-00')
        .required('Informe o CPF do cliente'),
});

export default function NewProcess() {
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState('');

    useEffect(() => {
        const getToken = localStorage.getItem('token');

        if (getToken) {
            setToken(JSON.parse(getToken));
        }
    }, []);

    async function handleSubmit({ number, cpf }) {
        try {
            setLoading(true);

            const response = await api.get(`/show/user/${cpf}`);

            const id_client = response.data;

            await api.post(
                '/create/process',
                {
                    number,
                    id_client,
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
            <Title>Novo Processo</Title>
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input
                    name="number"
                    type="text"
                    placeholder="nº: 00000000000000000000"
                />
                <Input
                    name="cpf"
                    type="text"
                    placeholder="CPF: 000.000.000-00"
                />

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
