import styled from 'styled-components'

export const StyledPasswordField = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin-top: 0.875rem;

  label {
    margin-top: 0.5rem;
  }

  > div {
    margin: 1.125rem 0rem 0.125rem;
    position: relative;
  }

  > div > input {
    padding-right: 3.125rem;
  }

  > div > button > svg {
    position: absolute;
    top: 0.875rem;
    right: 0.625rem;
    width: 1.25rem;
    height: 1.25rem;
    fill: var(--color-grey-1);
  }
`
