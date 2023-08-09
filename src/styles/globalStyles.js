import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #ff577f;
    --color-primary-hover: #ff427f;
    --color-primary-disable: #59323f;
    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343b41;
    --color-grey-1: #868e96;
    --color-grey-0: #f8f9fa;
    --color-white: #ffffff;
    --color-sucess: #3fe864;
    --color-negative: #e83f5b;

    --font-family: 'Inter', sans-serif;

    --font-size-8: 1.375rem;
    --font-size-7: 1.25rem;
    --font-size-6: 1.125rem;
    --font-size-5: 1rem;
    --font-size-4: 0.875rem;
    --font-size-3: 0.75rem;
    --font-size-2: 0.625rem;
    --font-size-1: 0.5rem;
    --font-size-0: 0.375rem;

    --font-weight-3: 700;
    --font-weight-2: 600;
    --font-weight-1: 500;
    --font-weight-0: 400;

    --line-height-6: 1.75rem;
    --line-height-5: 1.625rem;
    --line-height-4: 1.5rem;
    --line-height-3: 1.375rem;
    --line-height-2: 1.25rem;
    --line-height-1: 1.125rem;
    --line-height-0: 0.875rem;

    --border-radius-1: 0.25rem;
    --border-radius-0: 0.125rem;
  }

  ul::-webkit-scrollbar,
  textarea::-webkit-scrollbar {
    height: 0.4375rem;
    width: 0.4375rem;
  }
  
  ul::-webkit-scrollbar-thumb,
  textarea::-webkit-scrollbar-thumb {
    background-color: var(--color-primary);
  }
`
