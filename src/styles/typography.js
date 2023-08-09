import styled, { css } from 'styled-components'

export const defaultSettings = css`
  font-family: var(--font-family);
  font-style: normal;
  text-decoration: none;
  text-transform: none;

  ${({ colorText }) => {
    switch (colorText) {
      case 'dark-2':
        return css`
          color: var(--color-grey-4);
        `
      case 'dark-1':
        return css`
          color: var(--color-grey-3);
        `
      case 'dark-0':
        return css`
          color: var(--color-grey-2);
        `
      case 'white-2':
        return css`
          color: var(--color-grey-1);
        `
      case 'white-1':
        return css`
          color: var(--color-grey-0);
        `
      case 'white-0':
        return css`
          color: var(--color-white);
        `
    }
  }}

  ${({ sizeText }) => {
    switch (sizeText) {
      case 'xl':
        return css`
          font-size: var(--font-size-6) !important;
        `
      case 'lg':
        return css`
          font-size: var(--font-size-5) !important;
        `
      case 'md':
        return css`
          font-size: var(--font-size-4) !important;
        `
      case 'sm':
        return css`
          font-size: var(--font-size-3) !important;
        `
      case 'xs':
        return css`
          font-size: var(--font-size-2) !important;
        `
    }
  }}

  ${({ emphasis }) => {
    switch (emphasis) {
      case 'bold':
        return css`
          font-weight: var(--font-weight-3);
        `
      case 'italic':
        return css`
          font-style: italic;
        `
      case 'default':
        return css`
          font-weight: var(--font-weight-2);
        `
    }
  }}

    ${({ errorMessage }) => {
    switch (errorMessage) {
      case true:
        return css`
          color: var(--color-primary-hover);
        `
    }
  }}
`

export const StyledTittleH1 = styled.h1`
  ${defaultSettings}
  font-size: var(--font-size-6);
  font-weight: var(--font-weight-3);
  line-height: var(--line-height-6);
`

export const StyledTittleH2 = styled.h2`
  ${defaultSettings}
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-3);
  line-height: var(--line-height-5);
`
export const StyledTittleH3 = styled.h3`
  ${defaultSettings}
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-3);
  line-height: var(--line-height-4);
`
export const StyledParagraph = styled.p`
  ${defaultSettings}
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-0);
  line-height: var(--line-height-3);

  strong {
    font-weight: var(--font-weight-3);
  }
`

export const StyledSpan = styled.span`
  ${defaultSettings}
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-0);
  line-height: var(--line-height-3);

  strong {
    font-weight: var(--font-weight-3);
  }
`
