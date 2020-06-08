import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    max-width: 1430px;
    margin: 0 auto;
    height: 100vh;
    background: #e5e5e5;
    padding: 40px;
`;

export const MenuContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 130px;
    padding: 40px 50px;
    border-radius: 24px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    background: #000000;

    @media (max-width: 1300px) {
        width: 10px;
    }
`;

export const Avatar = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`;

export const IconsContainer = styled.div`
    display: flex;
    height: 50%;
    flex-direction: column;
    justify-content: space-around;
`;

export const IconContainer = styled.button`
    background: none;
`;

export const Icon = styled.img`
    width: 27px;
`;

export const ContainerMiddle = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
    padding: 0 30px;
`;

export const BannerContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 620px;
    height: 160px;
    background: #f5f5f7;
    border-radius: 14px;

    @media (max-width: 1230px) {
        width: 500px;
    }
`;

export const TextContainer = styled.div`
    padding: 30px 40px;
`;

export const TextTitle = styled.p`
    font-family: 'Roboto Slab', serif;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 5px;
`;

export const TextDescription = styled.p`
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    font-weight: 400;
`;

export const Illustration = styled.img`
    padding-right: 100px;
    height: 190px;
    margin-top: -31px;

    @media (max-width: 1230px) {
        padding-right: 30px;
    }
`;

export const ProcessesContainer = styled.ul`
    list-style: none;
    height: 100%;
    overflow-y: scroll;
    border: 1.5px solid #f5f5f7;
    padding: 10px;
    border-radius: 14px;

    ::-webkit-scrollbar {
        width: 0%;
    }
`;

export const Title = styled.p`
    font-family: 'Roboto Slab', serif;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
    margin-top: 40px;

    span {
        font-weight: 500;
        font-size: 20px;
    }
`;

export const ProcessContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 80px;
    background: #f5f5f7;
    padding: 20px 30px;
    border-radius: 14px;

    & + div {
        margin-top: 16px;
    }
`;

export const Process = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const AvatarClient = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 50%;
    margin-right: 15px;
`;

export const ProcessDescription = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProcessClient = styled.p`
    font-size: 16px;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-bottom: 5px;
`;

export const ProcessNumber = styled.p`
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto Slab', serif;
`;

export const ProcessButton = styled.button.attrs(() => ({
    type: 'button',
}))`
    width: 120px;
    height: 40px;
    border-radius: 8px;
    color: #fff;
    background: #000000;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto Slab', serif;
`;

export const ContainerLeft = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    align-self: center;
    flex-direction: column;
`;

export const ViewContiner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media (max-width: 1100px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 208px;
    height: 96px;
    padding: 30px;
    background: #f5f5f7;
    border-radius: 14px;

    @media (max-width: 1300px) {
        width: 180px;

        & + div {
            margin-left: 10px;
        }
    }

    @media (max-width: 1100px) {
        & + div {
            margin-left: 0;
            margin-top: 10px;
        }
    }
`;

export const Total = styled.p`
    font-size: 64px;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
`;

export const Label = styled.p`
    font-size: 16px;
    font-weight: 500;
    font-family: 'Roboto Slab', serif;
    text-align: center;
`;

export const ProgressesContainer = styled.ul`
    list-style: none;
    height: 100%;
    overflow-y: scroll;
    border: 1.5px solid #f5f5f7;
    padding: 10px;
    border-radius: 14px;

    ::-webkit-scrollbar {
        width: 0%;
    }
`;

export const Progress = styled.li`
    padding: 20px;
    background: #fff;
    border-radius: 24px;

    & + li {
        margin-top: 16px;
    }
`;

export const ProgressClient = styled.p`
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto Slab', serif;
    margin-bottom: 5px;

    span {
        font-weight: 700;
    }
`;

export const ProgressDescription = styled.p`
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto Slab', serif;
    text-align: justify;
    line-height: 20px;
    margin-bottom: 5px;
`;

export const ProgressDate = styled.p`
    font-size: 14px;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    text-align: end;
    line-height: 20px;
`;

export const MoreInfo = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`;

export const Options = styled.div`
    margin-bottom: 16px;
`;

export const NameOptions = styled.button`
    font-size: 14px;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    border-radius: 14px;
    padding: 5px 10px;

    & + button {
        margin-right: 5px;
    }

    svg {
        padding: 5px;
        background: #000000;
        margin-right: 10px;
        border-radius: 50%;
        margin-bottom: -4px;
    }
`;
