import React, { useState } from 'react';
import { FaSpinner, FaArrowLeft } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '../../services/api';
import history from '../../services/history';

import Container from '../../components/Container';
import Header from '../../components/Header';

import { SubmitButton, Button, Radio } from './styles';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório.'),
    email: Yup.string()
        .email('Insira um e-mail válido.')
        .required('O e-mail é obrigatório.'),
    password: Yup.string().required('Informe a senha.'),
    cpf: Yup.string()
        .min(14, 'Use o formato: 000.000.000-00')
        .required('Informe o CPF.'),
});

export default function SignUp() {
    const [loading, setLoading] = useState(false);
    const [lawyer, setLawyer] = useState(false);

    async function handleSubmit({ name, cpf, email, password }) {
        try {
            setLoading(true);

            await api.post('/create/user', {
                name,
                cpf,
                email,
                password,
                provider: lawyer,
            });

            alert(
                'Usuário criado com sucesso! Faça o login para desfrutar da aplicação...'
            );

            setLoading(false);
            history.push('/');
        } catch (err) {
            alert('Verifique os dados ou tente fazer login!');
            console.log(err);
        }
    }

    return (
        <Container>
            <Header />
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input
                    name="name"
                    type="text"
                    placeholder="Maurilio J. Silveira"
                />
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
                <Input name="cpf" type="text" placeholder="000.000.000-00" />
                <Radio onClick={() => setLawyer(true)}>
                    <Input name="lawyer" type="radio" />
                    <strong>lawyer</strong>
                </Radio>

                <SubmitButton loading={loading}>
                    {loading ? (
                        <FaSpinner color="#fff" size={14} />
                    ) : (
                        <strong>Cadastrar</strong>
                    )}
                </SubmitButton>
                <Button onClick={() => history.push('/')}>
                    <FaArrowLeft size={20} color="#000000" />
                    <strong>Já tenho uma conta</strong>
                </Button>
            </Form>
        </Container>
    );
}
