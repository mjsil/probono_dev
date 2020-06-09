import React, { useState, useEffect, useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { FaPlus } from 'react-icons/fa';

import api from '../../services/api';
import history from '../../services/history';

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
    MoreInfo,
    Options,
    NameOptions,
} from './styles';

import home from '../../assets/home.svg';
import settings from '../../assets/settings.svg';
import logout from '../../assets/logout.svg';
import avatar from '../../assets/avatar.png';
import illustration from '../../assets/illustration.svg';

export default function Dashboard() {
    const [processes, setProcesses] = useState([]);
    const [progresses, setProgresses] = useState([]);
    const [numberProcess, setNumberProcess] = useState(
        '- - - - - - - - - - - - - - - - -'
    );
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const processSize = useMemo(() => processes.length, [processes]);
    const progressSize = useMemo(() => progresses.length, [progresses]);

    useEffect(() => {
        const getToken = localStorage.getItem('token');
        const getUser = localStorage.getItem('user');

        if (getToken) {
            setToken(JSON.parse(getToken));
        }

        if (getUser) {
            setUser(JSON.parse(getUser));

            const name = JSON.parse(getUser).name;
            const firstName = name.split(' ', 1)[0];

            setName(firstName);
        }

        async function loadProcess() {
            try {
                const response = await api.get('/my/processes', {
                    headers: {
                        Authorization: 'Bearer ' + JSON.parse(getToken),
                    },
                });

                setProcesses(response.data);
            } catch (err) {
                alert('Algo deu errado! Faça login novamente.');

                history.push('/');
            }
        }

        loadProcess();
    }, []);

    async function showProgresses(idProcess, processNumber) {
        try {
            const response = await api.get(`/list/progress/${idProcess}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = response.data.map((progress) => ({
                ...progress,
                newDate: format(
                    parseISO(progress.date),
                    "'dia' dd 'de' MMMM'",
                    {
                        locale: pt,
                    }
                ),
                newTitle: progress.generic_title
                    .normalize('NFD')
                    .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')
                    .toLowerCase(),
            }));

            setProgresses(data);
            setNumberProcess(processNumber);
        } catch (err) {
            alert('Algo deu errado! Tente novamente.');
        }
    }

    function handleLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        history.push('/');
    }

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
                <IconContainer onClick={() => handleLogout()}>
                    <Icon src={logout} alt="Settings - Probono" />
                </IconContainer>
            </MenuContainer>
            <ContainerMiddle>
                <BannerContainer>
                    <TextContainer>
                        <TextTitle>Olá {name}!</TextTitle>
                        <TextDescription>
                            Seja bem-vindo novamente.
                        </TextDescription>
                    </TextContainer>
                    <Illustration
                        src={illustration}
                        alt="Illustration - Probono"
                    />
                </BannerContainer>

                <MoreInfo>
                    <Title>Processos</Title>
                    <Options>
                        <NameOptions
                            onClick={() => history.push('/new/process')}
                        >
                            <FaPlus size={20} color="#fff" />
                            Processo
                        </NameOptions>
                        <NameOptions
                            onClick={() => history.push('/new/progress')}
                        >
                            <FaPlus size={20} color="#fff" />
                            Progresso
                        </NameOptions>
                        <NameOptions onClick={() => history.push('/new/rule')}>
                            <FaPlus size={20} color="#fff" />
                            Regra
                        </NameOptions>
                    </Options>
                </MoreInfo>
                <ProcessesContainer>
                    {processes.map((process, index) => (
                        <ProcessContainer key={String(process.id)}>
                            <Process>
                                <AvatarClient
                                    src={avatar}
                                    alt="Avatar Cliente - Probono"
                                />
                                <ProcessDescription>
                                    <ProcessClient>
                                        {process.client.name}
                                    </ProcessClient>
                                    <ProcessNumber>
                                        nº: {process.number}
                                    </ProcessNumber>
                                </ProcessDescription>
                            </Process>
                            <ProcessButton
                                onClick={() =>
                                    showProgresses(process.id, process.number)
                                }
                            >
                                Progresso
                            </ProcessButton>
                        </ProcessContainer>
                    ))}
                </ProcessesContainer>
            </ContainerMiddle>
            <ContainerLeft>
                <ViewContiner>
                    <Content>
                        <Total>{processSize ? processSize : '0'}</Total>
                        <Label>Total de processos</Label>
                    </Content>
                    <Content>
                        <Total>{progressSize ? progressSize : '0'}</Total>
                        <Label>Total de progressos</Label>
                    </Content>
                </ViewContiner>
                <Title>
                    Progresso: <span>{numberProcess}</span>
                </Title>
                <ProgressesContainer>
                    {progresses.map((progress) => (
                        <Progress key={String(progress.id)}>
                            <ProgressClient>
                                Cliente:
                                <span> Maurilio de Jesus Silveira</span>
                            </ProgressClient>
                            <ProgressDescription>
                                {user.provider
                                    ? progress.generic_title
                                    : progress.newTitle}
                                {progress.details
                                    ? ' - ' + progress.details
                                    : ''}
                            </ProgressDescription>
                            <ProgressDate>
                                {progress.newDate && progress.hours
                                    ? progress.newDate + ' às '
                                    : progress.newDate}{' '}
                                {progress.hours}
                            </ProgressDate>
                        </Progress>
                    ))}
                </ProgressesContainer>
            </ContainerLeft>
        </Container>
    );
}
