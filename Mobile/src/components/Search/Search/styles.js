import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 24px;
`;

export const Input = styled(TextInput).attrs(() => ({
    placeholder: 'nº: 12345678998765432100',
}))`
    flex: 1;
    border-width: 1px;
    border-color: #000000;
    height: 40px;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 14px;
`;

export const Button = styled.TouchableOpacity`
    height: 40px;
    background: #000000;
    padding: 0 15px;
    margin-left: 5px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`;
