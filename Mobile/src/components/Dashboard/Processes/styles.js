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

export const ListProcesses = styled(FlatList)``;

export const ProcessContainer = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 14px;
    background: #f5f5f7;
    margin-bottom: 16px;
    padding: 20px;
`;

export const Process = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

export const Image = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    margin-right: 15px;
`;

export const InfoProcess = styled.View`
    flex: 1;
`;

export const ProcessClient = styled.Text`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 5px;
`;

export const ProcessNumber = styled.Text`
    font-size: 14px;
    font-weight: 400;
`;
