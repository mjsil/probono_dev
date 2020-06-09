import React from 'react';

import { Container } from './styles';

import Header from '../../components/Progresses/Header';
import Progresses from '../../components/Progresses/Progress';

export default function Progress() {
    return (
        <Container>
            <Header />
            <Progresses />
        </Container>
    );
}
