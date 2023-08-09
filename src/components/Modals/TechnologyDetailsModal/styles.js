import styled from 'styled-components'

export const ModalDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 23.125rem;
  max-height: 24.375rem;
  border-radius: var(--border-radius-1);
  background-color: var(--color-grey-3);
  box-shadow: 0rem 0.25rem 2.5rem -0.625rem rgba(0, 0, 0, 0.25);

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0.75rem 1.25rem;

    background-color: var(--color-grey-2);
    border-radius: 0.25rem 0.25rem 0rem 0rem;
  }
  > div > button {
    background-color: transparent;
  }

  > form > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    margin-top: 1.25rem;
  }

  > form > div > button:first-child {
    width: 50%;
  }

  > form > div > button:last-child {
    width: 50%;
  }
`

export const FormModalRegister = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0.625rem 1.25rem 1.25rem;
`
