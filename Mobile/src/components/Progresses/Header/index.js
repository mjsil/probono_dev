import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { Container, Icon, Process } from './styles';

export default function Header() {
    return (
        <Container>
            <Icon>
                <AntDesign name="leftcircleo" color="#0000000" size={30} />
            </Icon>
            <Process>00000000000000000000</Process>
        </Container>
    );
}
