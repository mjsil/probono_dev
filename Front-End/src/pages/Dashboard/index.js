import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import {
    Container,
    MenuContainer,
    Avatar,
    IconsContainer,
    IconContainer,
    Icon,
    ContainerMiddle,
    BannerContainer,
    TextContainer,
    TextTitle,
    TextDescription,
    Illustration,
    ProcessesContainer,
    Title,
    ProcessContainer,
    Process,
    AvatarClient,
    ProcessDescription,
    ProcessNumber,
    ProcessClient,
    ProcessButton,
    ContainerLeft,
    ViewContiner,
    Content,
    Total,
    Label,
    ProgressesContainer,
    Progress,
    ProgressClient,
    ProgressDescription,
    ProgressDate,
} from './styles';

import home from '../../assets/home.svg';
import settings from '../../assets/settings.svg';
import logout from '../../assets/logout.svg';
import avatar from '../../assets/avatar.png';
import illustration from '../../assets/illustration.svg';

export default function Dashboard() {
    useEffect(() => {
        // async function loadProcess() {
        //     const response = await api.get('my/processes', {
        //         headers: {
        //             Authorization:
        //                 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTkxNDUwNDE2LCJleHAiOjE1OTE4ODI0MTZ9.g1AFpYE9GzGh6_OxJYV4xhvd-55oCuq8bBXmNakikns',
        //         },
        //     });
        // }
        // loadProcess();
    }, []);

    return (
        <Container>
            <MenuContainer>
                <Avatar src={avatar} alt="Avatar - Probono" />
                <IconsContainer>
                    <IconContainer>
                        <Icon src={home} alt="Home - Probono" />
                    </IconContainer>
                    <IconContainer>
                        <Icon src={settings} alt="Settings - Probono" />
                    </IconContainer>
                </IconsContainer>
                <IconContainer>
                    <Icon src={logout} alt="Settings - Probono" />
                </IconContainer>
            </MenuContainer>
            <ContainerMiddle>
                <BannerContainer>
                    <TextContainer>
                        <TextTitle>Olá Jhon!</TextTitle>
                        <TextDescription>
                            Seja bem-vindo novamente.
                        </TextDescription>
                    </TextContainer>
                    <Illustration
                        src={illustration}
                        alt="Illustration - Probono"
                    />
                </BannerContainer>

                <Title>Processos</Title>
                <ProcessesContainer>
                    <ProcessContainer>
                        <Process>
                            <AvatarClient
                                src={avatar}
                                alt="Avatar Cliente - Probono"
                            />
                            <ProcessDescription>
                                <ProcessClient>
                                    Maurilio de Jesus Silveira
                                </ProcessClient>
                                <ProcessNumber>
                                    nº: 12345678912345678900
                                </ProcessNumber>
                            </ProcessDescription>
                        </Process>
                        <ProcessButton>Progresso</ProcessButton>
                    </ProcessContainer>

                    <ProcessContainer>
                        <Process>
                            <AvatarClient
                                src={avatar}
                                alt="Avatar Cliente - Probono"
                            />
                            <ProcessDescription>
                                <ProcessClient>
                                    Maurilio de Jesus Silveira
                                </ProcessClient>
                                <ProcessNumber>
                                    nº: 12345678912345678900
                                </ProcessNumber>
                            </ProcessDescription>
                        </Process>
                        <ProcessButton>Progresso</ProcessButton>
                    </ProcessContainer>

                    <ProcessContainer>
                        <Process>
                            <AvatarClient
                                src={avatar}
                                alt="Avatar Cliente - Probono"
                            />
                            <ProcessDescription>
                                <ProcessClient>
                                    Maurilio de Jesus Silveira
                                </ProcessClient>
                                <ProcessNumber>
                                    nº: 12345678912345678900
                                </ProcessNumber>
                            </ProcessDescription>
                        </Process>
                        <ProcessButton>Progresso</ProcessButton>
                    </ProcessContainer>

                    <ProcessContainer>
                        <Process>
                            <AvatarClient
                                src={avatar}
                                alt="Avatar Cliente - Probono"
                            />
                            <ProcessDescription>
                                <ProcessClient>
                                    Maurilio de Jesus Silveira
                                </ProcessClient>
                                <ProcessNumber>
                                    nº: 12345678912345678900
                                </ProcessNumber>
                            </ProcessDescription>
                        </Process>
                        <ProcessButton>Progresso</ProcessButton>
                    </ProcessContainer>

                    <ProcessContainer>
                        <Process>
                            <AvatarClient
                                src={avatar}
                                alt="Avatar Cliente - Probono"
                            />
                            <ProcessDescription>
                                <ProcessClient>
                                    Maurilio de Jesus Silveira
                                </ProcessClient>
                                <ProcessNumber>
                                    nº: 12345678912345678900
                                </ProcessNumber>
                            </ProcessDescription>
                        </Process>
                        <ProcessButton>Progresso</ProcessButton>
                    </ProcessContainer>
                </ProcessesContainer>
            </ContainerMiddle>
            <ContainerLeft>
                <ViewContiner>
                    <Content>
                        <Total>11</Total>
                        <Label>Total de clientes</Label>
                    </Content>
                    <Content>
                        <Total>4</Total>
                        <Label>Total de processos</Label>
                    </Content>
                </ViewContiner>
                <Title>
                    Progresso: <span>00000000000000000000</span>
                </Title>
                <ProgressesContainer>
                    <Progress>
                        <ProgressClient>
                            Cliente:
                            <span> Maurilio de Jesus Silveira</span>
                        </ProgressClient>
                        <ProgressDescription>
                            A audiência de conciliação, forma amigável de
                            resolver um processo, foi marcada.
                        </ProgressDescription>
                        <ProgressDate>01/02/2019 08:30</ProgressDate>
                    </Progress>

                    <Progress>
                        <ProgressClient>
                            Cliente:
                            <span> Maurilio de Jesus Silveira</span>
                        </ProgressClient>
                        <ProgressDescription>
                            A audiência de conciliação, forma amigável de
                            resolver um processo, foi marcada.
                        </ProgressDescription>
                        <ProgressDate>01/02/2019 08:30</ProgressDate>
                    </Progress>

                    <Progress>
                        <ProgressClient>
                            Cliente:
                            <span> Maurilio de Jesus Silveira</span>
                        </ProgressClient>
                        <ProgressDescription>
                            A audiência de conciliação, forma amigável de
                            resolver um processo, foi marcada.
                        </ProgressDescription>
                        <ProgressDate>01/02/2019 08:30</ProgressDate>
                    </Progress>

                    <Progress>
                        <ProgressClient>
                            Cliente:
                            <span> Maurilio de Jesus Silveira</span>
                        </ProgressClient>
                        <ProgressDescription>
                            A audiência de conciliação, forma amigável de
                            resolver um processo, foi marcada.
                        </ProgressDescription>
                        <ProgressDate>01/02/2019 08:30</ProgressDate>
                    </Progress>
                </ProgressesContainer>
            </ContainerLeft>
        </Container>
    );
}
