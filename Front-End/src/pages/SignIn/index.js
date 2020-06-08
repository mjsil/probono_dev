import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '../../services/api';
import history from '../../services/history';

import Container from '../../components/Container';
import Header from '../../components/Header';

import { SubmitButton, Button } from './styles';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail válido.')
        .required('O e-mail é obrigatório.'),
    password: Yup.string().required('Informe a senha.'),
});

export default function SignIn() {
    const [loading, setLoading] = useState(false);

    async function handleSubmit({ email, password }) {
        try {
            setLoading(true);

            const response = await api.post('/session', {
                email,
                password,
            });

            const { user, token } = response.data;

            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', JSON.stringify(token));

            setLoading(false);
            history.push('/dashboard');
        } catch (err) {
            setLoading(false);
            alert('E-mail ou senha incorretos.');
        }
    }

    return (
        <Container>
            <Header />
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input
                    name="email"
                    type="email"
                    placeholder="email@gmail.com"
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="* * * * * * *"
                />

                <SubmitButton loading={loading}>
                    {loading ? (
                        <FaSpinner color="#fff" size={14} />
                    ) : (
                        <strong>Entrar</strong>
                    )}
                </SubmitButton>
                <Button onClick={() => history.push('/signup')}>
                    <strong>Cadastre-se</strong>
                </Button>
            </Form>
        </Container>
    );
}
