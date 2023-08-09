import styled from 'styled-components'

export const StyledUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2.1875rem 0rem;
  gap: 0.625rem;

  > h1 {
    color: var(--color-white);
  }

  > p {
    text-align: start;
    color: var(--color-grey-1);
  }

  @media screen and (min-width: 426px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > h1 {
      color: var(--color-white);
    }

    > p {
      text-align: end;
      color: var(--color-grey-1);
    }
  }
`
