import React from 'react';

import { Container, Image } from './styles';

import logo from '../../assets/logo.png';

export default function Header() {
    return (
        <Container>
            <Image src={logo} alt="Logo - Probono" />
        </Container>
    );
}
