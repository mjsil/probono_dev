import React from 'react';

import {
    Container,
    BannerText,
    BannerTitle,
    BannerDescription,
    Illustration,
} from './styles';

import illustration from '../../../assets/illustration.png';

export default function Banner() {
    return (
        <Container>
            <BannerText>
                <BannerTitle>Olá Josh!</BannerTitle>
                <BannerDescription>Seja bem-vindo novamente.</BannerDescription>
            </BannerText>
            <Illustration
                source={illustration}
                alt="Illustration - Probono"
                resizeMode="contain"
            />
        </Container>
    );
}
