import React from 'react';

import { Container } from './styles';

import Banner from '../../components/Dashboard/Banner';
import Processes from '../../components/Dashboard/Processes';

export default function Dashboard() {
    return (
        <Container>
            <Banner />
            <Processes title={'Processos'} />
        </Container>
    );
}
