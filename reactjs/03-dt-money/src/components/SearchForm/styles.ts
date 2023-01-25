import styled from "styled-components";

export const SeacrchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        border: 0;
        border-radius: 0px;
        background: ${props => props.theme["gray-900"]};
        color: ${props => props.theme["gray-300"]};
        padding: 1rem;

        &::placeholder {
            color: ${props => props.theme["gray-500"]};
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        border: 0;
        padding: 1rem;
        background: transparent;
        color: ${props => props.theme["green-300"]};
        border: 1px solid ${props => props.theme["green-300"]};
        font-weight: bold;
        border-radius: 6px;
        cursor: poiter;

        &:disabled {
            opacity: .6;
            cursor: not-allowed;
        }

        &:not(:disabled):hover {
            background: ${props => props.theme["green-500"]};;
            color: ${props => props.theme.white};
            border-color: 1px solid ${props => props.theme["green-500"]};
            transition: background-color 0.2s, color 0.2s, border-color 0.2s;
        }
    }
`