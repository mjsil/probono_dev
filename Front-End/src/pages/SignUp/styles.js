import styled, { keyframes, css } from 'styled-components';

export const Header = styled.header`
    display: flex;
    flex: 1;
    justify-content: center;
`;

export const Image = styled.img`
    max-height: 50px;
`;

export const Form = styled.form`
    margin-top: 30px;
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
    font-size: 400;
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
    font-size: 400;
    margin-top: 25px;

    strong {
        margin-left: 10px;
    }
`;

export const Radio = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    flex-direction: row;
    margin-top: 10px;

    input {
        flex: 0;
        margin-top: 3px;
    }

    strong {
        margin-left: 5px;
    }
`;
