import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  color: ${(props) => props.theme['gray-100']};
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-style: inherit;
  padding: 0 0.5rem;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex-basis: 1;

  &::-webkit-calendar-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
