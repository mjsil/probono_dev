import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Title = styled.Text`
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 700;
`;

export const Container = styled.ScrollView.attrs(() => ({
    showsVerticalScrollIndicator: false,
}))``;

export const ListProgresses = styled(FlatList)``;

export const ProgressContainer = styled.TouchableOpacity`
    border-radius: 14px;
    background: #f5f5f7;
    margin-bottom: 16px;
    padding: 20px;
`;

export const ProgressClient = styled.Text`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 5px;
`;

export const Client = styled.Text`
    font-size: 16px;
    font-weight: 700;
`;

export const ProgressDescription = styled.Text`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 10px;
`;

export const ProgressDate = styled.Text`
    font-size: 14px;
    font-weight: 700;
    text-align: right;
`;
