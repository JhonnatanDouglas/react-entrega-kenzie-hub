import React, { useState } from 'react'
import { StyledInput, StyledLabel } from '../../styles/form'
import { StyledSpan } from '../../styles/typography'
import { StyledPasswordField } from './styles'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

export const StyledPasswordInput = ({
  id,
  label,
  type,
  placeholder,
  error,
  register,
  autoComplete,
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const changeView = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true)
  }

  return (
    <StyledPasswordField>
      <StyledLabel>{label}</StyledLabel>
      <div>
        <StyledInput
          type={showPassword ? 'text' : type}
          id={id}
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...register}
        />
        {showPassword ? (
          <button type='button' onClick={() => changeView()}>
            <AiFillEyeInvisible />
          </button>
        ) : (
          <button type='button' onClick={() => changeView()}>
            <AiFillEye />
          </button>
        )}
      </div>
      {error ? (
        <StyledSpan errorMessage={true} sizeText='sm'>
          {error.message}
        </StyledSpan>
      ) : null}
    </StyledPasswordField>
  )
}
