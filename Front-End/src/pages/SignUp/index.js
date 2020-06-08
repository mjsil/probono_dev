import React, { useState } from 'react';
import { FaSpinner, FaArrowLeft } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Container from '../../components/Container';
import Header from '../../components/Header';

import { SubmitButton, IconBack } from './styles';

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

    function handleSubmit() {
        return;
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

                <SubmitButton loading={loading}>
                    {loading ? (
                        <FaSpinner color="#fff" size={14} />
                    ) : (
                        <strong>Cadastrar</strong>
                    )}
                </SubmitButton>
                <IconBack>
                    <FaArrowLeft size={20} color="#000000" />
                    <strong>Já tenho uma conta</strong>
                </IconBack>
            </Form>
        </Container>
    );
}
