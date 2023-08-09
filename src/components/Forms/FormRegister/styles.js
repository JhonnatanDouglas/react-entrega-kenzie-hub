import styled from 'styled-components'

export const StyledFormRegister = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2.1875rem;
  padding: 1.375rem 1.375rem 1.75rem;
  background-color: var(--color-grey-3);
  box-shadow: 0rem 0.25rem 2.5rem -0.625rem rgba(0, 0, 0, 0.25);
  border-radius: var(--border-radius-1);

  > h1 {
    margin: 1rem 0rem 1.25rem;
    text-align: center;
    color: var(--color-white);
  }

  > p {
    margin-bottom: 0.5rem;
    text-align: center;
    color: var(--color-grey-1);
  }

  > button {
    margin-top: 1.625rem;
  }
`
