import { StyledFieldBox, StyledLabel, StyledTextArea } from '../../styles/form'
import { StyledSpan } from '../../styles/typography'

export const StyledInputTextArea = ({
  label,
  id,
  placeholder,
  cols,
  rows,
  error,
  register,
}) => {
  return (
    <StyledFieldBox>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextArea
        id={id}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        {...register}
      />
      {error ? (
        <StyledSpan errorMessage={true} sizeText='sm'>
          {error.message}
        </StyledSpan>
      ) : null}
    </StyledFieldBox>
  )
}
