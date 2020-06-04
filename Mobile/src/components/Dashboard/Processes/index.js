import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import {
    Container,
    ListProcesses,
    Title,
    ProcessContainer,
    Image,
    InfoProcess,
    Process,
    ProcessNumber,
    ProcessClient,
} from './styles';

import avatar from '../../../assets/avatar.png';

const processes = [
    {
        id: 1,
        number: '00000000000000000000',
        client: 'Maurilio de Jesus Silveira Pereira Oliveira',
    },
    {
        id: 2,
        number: '00000000000000000000',
        client: 'Maurilio de Jesus Silveira',
    },
    {
        id: 3,
        number: '00000000000000000000',
        client: 'Maurilio de Jesus Silveira',
    },
    {
        id: 4,
        number: '00000000000000000000',
        client: 'Maurilio de Jesus Silveira',
    },
    {
        id: 5,
        number: '00000000000000000000',
        client: 'Maurilio de Jesus Silveira',
    },
    {
        id: 6,
        number: '00000000000000000000',
        client: 'Maurilio de Jesus Silveira',
    },
];

export default function Processes() {
    return (
        <>
            <Title>Processos</Title>
            <Container>
                <ListProcesses
                    data={processes}
                    keyExtractor={(process) => process.id}
                    renderItem={({ item: process }) => (
                        <ProcessContainer>
                            <Process>
                                <Image source={avatar} resizeMode="contain" />
                                <InfoProcess>
                                    <ProcessClient>
                                        {process.client}
                                    </ProcessClient>
                                    <ProcessNumber>
                                        nº: {process.number}
                                    </ProcessNumber>
                                </InfoProcess>
                            </Process>
                            <AntDesign name="right" size={24} color="#000000" />
                        </ProcessContainer>
                    )}
                />
            </Container>
        </>
    );
}
