import React from 'react';

import {
    Title,
    Container,
    ListProgresses,
    ProgressContainer,
    ProgressClient,
    Client,
    ProgressDescription,
    ProgressDate,
} from './styles';

const progresses = [
    {
        id: 1,
        client: 'Maurilio de Jesus Silveira',
        description:
            'A audiência de conciliação, forma amigável de resolver um processo, foi marcada.',
        date: '01/02/2019 08:30',
    },
    {
        id: 2,
        client: 'Maurilio de Jesus Silveira',
        description:
            'A audiência de conciliação, forma amigável de resolver um processo, foi marcada.',
        date: '01/02/2019 08:30',
    },
    {
        id: 3,
        client: 'Maurilio de Jesus Silveira',
        description:
            'A audiência de conciliação, forma amigável de resolver um processo, foi marcada.',
        date: '01/02/2019 08:30',
    },
    {
        id: 4,
        client: 'Maurilio de Jesus Silveira',
        description:
            'A audiência de conciliação, forma amigável de resolver um processo, foi marcada.',
        date: '01/02/2019 08:30',
    },
    {
        id: 5,
        client: 'Maurilio de Jesus Silveira',
        description:
            'A audiência de conciliação, forma amigável de resolver um processo, foi marcada.',
        date: '01/02/2019 08:30',
    },
];

export default function Progresses() {
    return (
        <>
            <Title>Progressos</Title>
            <Container>
                <ListProgresses
                    data={progresses}
                    keyExtractor={(progress) => progress.id}
                    renderItem={({ item: progress }) => (
                        <ProgressContainer>
                            <ProgressClient>
                                Cliente: <Client>{progress.client}</Client>
                            </ProgressClient>
                            <ProgressDescription>
                                {progress.description}
                            </ProgressDescription>
                            <ProgressDate>{progress.date}</ProgressDate>
                        </ProgressContainer>
                    )}
                />
            </Container>
        </>
    );
}
