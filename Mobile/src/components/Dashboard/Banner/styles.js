import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    height: 160px;
    align-items: center;
    justify-content: space-between;
    border-radius: 14px;
    background: #f5f5f7;
    padding: 0 10px 0 20px;
    margin-bottom: 24px;
`;

export const BannerText = styled.View`
    flex: 1;
    margin-right: 5px;
`;

export const BannerTitle = styled.Text`
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 5px;
`;

export const BannerDescription = styled.Text`
    font-size: 16px;
    font-weight: 400;
`;

export const Illustration = styled.Image`
    height: 150px;
    width: 135px;
    margin-top: 10px;
`;
