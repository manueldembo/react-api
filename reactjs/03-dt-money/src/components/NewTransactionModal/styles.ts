import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background-color: rgba(0, 0, 0, .75);
`

export const Content = styled(Dialog.Content)`
    width: 32rem;
    border-radius: 6px;
    background-color: ${props => props.theme['gray-800']};
    padding: 2.5rem 3rem;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            border-radius: 6px;
            padding: 1rem;
            background-color: ${props => props.theme['gray-900']};
            color: ${props => props.theme['gray-300']};
            border: 0;

            &::placeholder {
                color: ${props => props.theme['gray-500']};
            }
        }

        button[type="submit"] {
            border: 0;
            border-radius: 6px;
            background-color: ${props => props.theme['green-500']};
            color: ${props => props.theme.white};
            padding: 0 1.25;
            height: 58px;
            font-weight: bold;
            margin-top: 1.5rem;
            cursor: pointer;

            &:disabled {
                cursor: not-allowed;
                opacity: .6;
            }

            &:not(:disabled):hover {
                background-color: ${props => props.theme['green-700']};
                transition: background-color 0.2s;
            }
        }
    }
`

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background: transparent;
    cursor: pointer;
    color: ${props => props.theme['gray-500']};
    line-height: 0;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
`

export const TransactionType = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
    variant: 'income' | 'outcome' 
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
    background: ${props => props.theme['gray-700']};
    color: ${props => props.theme['gray-300']};
    border: 0;
    border-radius: 6px;
    gap: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 1rem;

    svg {
        color: ${props => props.variant == 'income' ? props.theme['green-300'] : props.theme['red-300']};
    }

    &[data-state="unchecked"]:hover {
        background: ${props => props.theme['gray-600']};
        transition: background-color .2s;
    }

    &[data-state="checked"] {
        color: ${props => props.theme.white};
        background: ${props => props.variant === 'income' ? props.theme['green-500'] : props.theme['red-500']};
        
        svg {
            color: ${props => props.theme.white}
        }
    }   
`