import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`





export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;

  color: ${(props) => props.theme['gray-100']};

  &:disabled {
    background: ${(props) => props.theme['green-300']};
    cursor: not-allowed;
  }
`
export const StartCountdownButton = styled(BaseCountdownButton)`
  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
  background: ${(props) => props.theme['green-500']};
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
  background: ${(props) => props.theme['red-500']};
`
