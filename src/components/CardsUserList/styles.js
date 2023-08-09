import styled from "styled-components"

export const StyledCard = styled.li`
  > button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.375rem;

    width: 100%;
    height: 100%;
    max-height: 3rem;
    margin: 0rem 0rem;
    padding: 1.5rem 1.25rem;
    background-color: var(--color-grey-4);
    border: 0.125rem solid var(--color-grey-4);
    border-radius: var(--border-radius-1);

    transition: 0.7s;
    cursor: pointer;

    &:hover {
      background-color: var(--color-grey-2);
      border: 0.125rem solid var(--color-grey-2);
    }
  }

  > button > h3 {
    text-align: start;
    color: var(--color-grey-0);
  }

  > button > p {
    text-align: end;
    color: var(--color-grey-1);
  }
`
