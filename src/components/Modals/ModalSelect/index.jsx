import { StyledFieldBox, StyledLabel, StyledSelect } from '../../../styles/form'
import { StyledSpan } from '../../../styles/typography'

export const StyledModalInputSelect = ({ label, error, register }) => {
  return (
    <StyledFieldBox>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect {...register}>
        <option value='' hidden>
          Selecione um status
        </option>
        <option value='Iniciante'>Iniciante</option>
        <option value='Intermediário'>Intermediário</option>
        <option value='Avançado'>Avançado</option>
      </StyledSelect>
      {error ? (
        <StyledSpan errorMessage={true} sizeText='sm'>
          {error.message}
        </StyledSpan>
      ) : null}
    </StyledFieldBox>
  )
}
