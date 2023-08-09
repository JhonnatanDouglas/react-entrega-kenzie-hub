import styled from 'styled-components'

export const StyledFormLogin = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2.1875rem;
  padding: 0.4375rem 1.375rem 2.625rem;
  background-color: var(--color-grey-3);
  box-shadow: 0rem 0.25rem 2.5rem -0.625rem rgba(0, 0, 0, 0.25);
  border-radius: var(--border-radius-1);

  > h1 {
    margin: 2rem 0rem 1.75rem;
    text-align: center;
    color: var(--color-white);
  }

  > div:last-child {
    margin-top: 1.125rem;
  }

  > div > p {
    margin: 2rem 0rem 1.25rem;
    text-align: center;
    color: var(--color-grey-1);
  }
`
