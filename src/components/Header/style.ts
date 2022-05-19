import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 60px;
    justify-content: center;
    display:flex;
    flex-direction: row;
    border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
    background-color: rgba(var(--d87,255,255,255),1);
`

export const Content = styled.div`
    width: 100%;
    max-width: 975px;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const Button = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
`
