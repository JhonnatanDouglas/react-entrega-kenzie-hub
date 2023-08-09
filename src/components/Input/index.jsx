import React from 'react'
import { StyledFieldBox, StyledInput, StyledLabel } from '../../styles/form'
import { StyledSpan } from '../../styles/typography'

export const StyledInputLabel = ({
  id,
  label,
  type,
  placeholder,
  error,
  register,
  autoComplete,
  disabled,
}) => {
  return (
    <StyledFieldBox>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        disabled={disabled ? true : false}  
        type={type}
        id={id}
        placeholder={placeholder}
        autoComplete={autoComplete}
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
