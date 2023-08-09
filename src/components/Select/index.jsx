import { StyledFieldBox, StyledLabel, StyledSelect } from '../../styles/form'
import { StyledSpan } from '../../styles/typography'

export const StyledInputSelect = ({ label, error, register }) => {
  return (
    <StyledFieldBox>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect {...register}>
        <option value='' hidden>
          Selecione um Módulo
        </option>
        <option value='Primeiro módulo (Introdução ao Frontend)'>
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value='Segundo módulo (Frontend Avançado)'>
          Segundo módulo (Frontend Avançado)
        </option>
        <option value='Terceiro módulo (Introdução ao Backend)'>
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value='Quarto módulo (Backend Avançado)'>
          Quarto módulo (Backend Avançado)
        </option>
      </StyledSelect>
      {error ? (
        <StyledSpan errorMessage={true} sizeText='sm'>
          {error.message}
        </StyledSpan>
      ) : null}
    </StyledFieldBox>
  )
}
