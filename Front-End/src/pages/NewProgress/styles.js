import styled, { keyframes, css } from 'styled-components';

export const Title = styled.p`
    display: flex;
    flex: 1;
    justify-content: center;
    font-family: 'Roboto Slab', serif;
    font-size: 25px;
    font-weight: 700;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    flex: 1;
    padding: 10px 15px;
    border: 1px solid #eee;
    border-radius: 4px;
    color: #000000;
    font-family: 'Roboto Slab', serif;
    font-size: 14px;
    margin-bottom: 5px;
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs((props) => ({
    type: 'submit',
    disabled: props.loading,
}))`
    background: #000000;
    border: 0;
    padding: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: 'Roboto Slab', serif;
    font-size: 14px;
    font-weight: 400;
    margin-top: 15px;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }

    ${(props) =>
        props.loading &&
        css`
            svg {
                animation: ${rotate} 1.5s linear infinite;
            }
        `}
`;

export const Button = styled.button.attrs(() => ({
    type: 'button',
}))`
    background: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #000000;
    font-family: 'Roboto Slab', serif;
    font-size: 14px;
    font-weight: 400;
    margin-top: 25px;

    strong {
        margin-left: 10px;
    }
`;
