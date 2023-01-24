import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: ${props => props.theme["gray-900"]};
    padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    padding: 0 1.5rem;
    margin: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NewTransactionButton = styled.button`
    border: 0;
    height: 50px;
    padding: 0 1.5rem;
    font-weight: bolde;
    border-radius: 6px;
    cursor: pointer;
    background-color: ${props => props.theme["green-500"]};
    color: ${props => props.theme["white"]};
    
    &:hover {
        background-color: ${props => props.theme["green-700"]};
        transition: background-color 0.2s;
    }
`