import styled from "styled-components";

export const CommentsList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem 1rem;
    gap: .25rem;

    .user {
        font-weight: bold;
    }

    .info {
        color: rgba(var(--fe0,0,55,107),1);
    }

    .date {
        font-size: 0.625rem;
    }
`

export const CommentAdd = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 1.25rem;
    border-top:2px solid rgba(var(--ce3,239,239,239),1);
    
    svg {
        cursor: pointer;
    }

    input {
        width: 100%;
        border: none;
        outline: none;
        padding-left: 1rem;
        background-color: transparent;
    }
`

export const Button = styled.button`
    color: rgba(var(--d69,0,149,246),1);
    font-weight: 600;
    background-color: transparent;
    border: none;
    cursor: pointer;

`