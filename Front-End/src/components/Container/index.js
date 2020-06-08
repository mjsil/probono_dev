import styled from 'styled-components';

const Container = styled.div`
    max-width: 400px;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 80px auto;
    background: #e5e5e5;

    form {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
    }

    input {
        flex: 1;
        padding: 10px 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        font-size: 14px;
        margin-bottom: 5px;
    }

    span {
        align-self: flex-start;
        margin: 0 0 10px;
        color: rgba(240, 52, 52, 1);
        font-family: 'Roboto Slab', serif;
        font-size: 14px;
        font-size: 400;
    }
`;

export default Container;
