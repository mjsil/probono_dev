import React, { useState, useEffect } from 'react';
import { FaSpinner, FaArrowLeft } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '../../services/api';
import history from '../../services/history';

import Container from '../../components/Container';

import { Title, SubmitButton, Button } from './styles';

const schema = Yup.object().shape({
    rule: Yup.string().required('A regra é obrigatória.'),
    translation: Yup.string().required('Informe a trasução da regra'),
});

export default function NewRule() {
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState('');

    useEffect(() => {
        const getToken = localStorage.getItem('token');

        if (getToken) {
            setToken(JSON.parse(getToken));
        }
    }, []);

    async function handleSubmit({ rule, translation }) {
        try {
            setLoading(true);

            await api.post(
                '/create/rules',
                {
                    rule,
                    translation,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            alert('Regra criado com sucesso!');

            setLoading(false);
            history.push('/dashboard');
        } catch (err) {
            setLoading(false);
            alert('Algo deu errado tente novamente!');
        }
    }

    return (
        <Container>
            <Title>Nova Regra</Title>
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input
                    name="rule"
                    type="text"
                    placeholder="Regra: Recebido o recurso sem efeito..."
                />
                <Input
                    name="translation"
                    type="text"
                    placeholder="Tradução: A empresa que processamos foi contra a... "
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
