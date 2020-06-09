import React from 'react';

import { Container } from './styles';

import Header from '../../components/Search/Header';
import Process from '../../components/Dashboard/Processes';
import Input from '../../components/Search/Search';

export default function Searc() {
    return (
        <Container>
            <Header />
            <Input />
            <Process title={'Processo'} />
        </Container>
    );
}
