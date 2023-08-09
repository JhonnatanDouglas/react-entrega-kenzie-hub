import styled, { css } from 'styled-components'

export const StyledFieldBox = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin-top: 0.875rem;

  label {
    margin-top: 0.5rem;
  }

  input {
    margin: 1.125rem 0rem 0.125rem;
  }

  textarea {
    margin: 1.125rem 0rem 0.125rem;
  }

  select {
    margin: 1.125rem 0rem 0.125rem;
  }
`

export const InputSettings = css`
  font-family: var(--font-family);
  font-size: var(--font-size-5);
  color: var(--color-grey-0);

  width: 100%;
  height: 3rem;
  padding: 0.625rem;

  background-color: var(--color-grey-2);
  border: 0.125rem solid var(--color-grey-2);
  border-radius: var(--border-radius-1);

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    border: 0.125rem solid var(--color-grey-0);
  }

  ${({ error }) => {
    if (error) {
      return css`
        border: 0.125rem solid var(--color-negative);
      `
    }
  }}
`

export const StyledInput = styled.input`
  ${InputSettings}
  padding: 1rem;

  &::placeholder {
    color: var(--color-grey-1);
  }

  ${({ inputStyleType }) => {
    switch (inputStyleType) {
      case 'password':
        return css`
          padding: 0.625rem 3.5rem 0.625rem 1rem;
        `
    }
  }}
`

export const StyledLabel = styled.label`
  font-weight: var(--font-weight-0);
  font-size: var(--font-size-3);
  line-height: 0rem;
  color: var(--color-grey-0);
`

export const StyledTextArea = styled.textarea`
  font-family: var(--font-family);
  font-size: var(--font-size-5);
  color: var(--color-grey-0);

  background-color: var(--color-grey-2);
  border: 0.125rem solid var(--color-grey-2);
  border-radius: var(--border-radius-1);

  padding: 0.75rem;

  &::placeholder {
    color: var(--color-grey-1);
  }

  &:focus {
    border: 0.125rem solid var(--color-grey-0);
  }
`

export const StyledSelect = styled.select`
  ${InputSettings}

  &::placeholder {
    color: var(--color-grey-1);
  }
`
