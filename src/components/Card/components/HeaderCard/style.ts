import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: rgba(var(--d87,255,255,255),1);
    justify-content: space-between;
    align-items: center;
    padding: 0.875rem 1rem;

    img {
        border-radius: 50%;
    }

    .name {
        display: flex;
        width: calc(100% - (42px + 24px));
        padding-left: 0.875rem;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 0.875rem;
    }
`

export const Button = styled.div`
    border: none;
    background-color: transparent;
    cursor: pointer;
    align-items: center;
`
