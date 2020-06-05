import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
`;

export const Icon = styled.TouchableOpacity`
    flex: 1;
`;

export const Title = styled.Text`
    height: 100%;
    font-size: 20px;
    font-weight: 700;
`;
