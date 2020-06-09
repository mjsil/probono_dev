import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { Container, Icon, Title } from './styles';

export default function Header() {
    return (
        <Container>
            <Icon>
                <AntDesign name="leftcircleo" color="#0000000" size={30} />
            </Icon>
            <Title>Search Process</Title>
            <Icon />
        </Container>
    );
}
